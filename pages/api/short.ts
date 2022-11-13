import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../redis";
import { REDIS_KEY } from "../../constants";

type Data = {
  success: boolean;
  longUrl: string;
};
type ErrorData = {
  success: boolean;
  error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorData>) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "method not allowed" });
    return;
  }
  const { url } = req.query;

  await redis.hget(REDIS_KEY, url!.toString()).then(response => {
    if (response !== null) {
      const url: string = JSON.parse(response).longUrl;
      return res.json({ success: true, longUrl: url });
    } else {
      return res.json({ success: false, error: "url not found" });
    }
  });
}
