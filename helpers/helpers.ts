import { URL_ENDPOINT } from "../constants";
import { ShortUrlResponse, URLPayload, ClientResponse } from "../types";

export const generateRandomString = (n: number): string => {
  const chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from({ length: n }, (v, k) => chars[Math.floor(Math.random() * chars.length)]);

  const randomString = randomArray.join("");
  return randomString;
};

export const isValidUrl = (url: string): boolean => {
  let givenURL;
  try {
    givenURL = new URL(url);
  } catch (error) {
    return false;
  }
  if (givenURL.host === "localhost") {
    return false;
  }
  return givenURL.protocol === "http:" || givenURL.protocol === "https:";
};

export const getShortUrl = async (payload: URLPayload): Promise<ClientResponse> => {
  try {
    let res = await fetch(URL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return { short: null, error: "Something went wrong" };
    }
    let data = (await res.json()) as ShortUrlResponse;
    return { short: data.short, error: null };
  } catch (err) {
    console.log(err);
    return { short: null, error: "Something went wrong" };
  }
};
