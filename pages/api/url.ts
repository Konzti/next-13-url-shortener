import type { NextApiRequest, NextApiResponse } from "next";
import { UpstashPayload } from "../../types";
import { generateRandomString } from "./../../helpers/helpers";
import { REDIS_KEY, SHORT_LENGTH } from "../../constants";
import { redis } from "../../redis";

type Data = {
  success: boolean;
  short?: string;
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
  const { longUrl } = req.body;

  let random = generateRandomString(SHORT_LENGTH);

  let payload: UpstashPayload = {
    longUrl,
    shortUrl: random,
    createdAt: new Date(),
  };

  await redis.hset(REDIS_KEY, [random, JSON.stringify(payload)]);

  res.status(200).json({ success: true, short: random });
}
