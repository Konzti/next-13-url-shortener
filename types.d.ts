export type URLPayload = {
  longUrl: string;
};
export type UpstashPayload = {
  longUrl: string;
  shortUrl: string;
  createdAt: Date;
};

export type ShortUrlResponse = {
  short: string;
};

export type ResponseError = {
  error: string;
};

export type ClientResponse = {
  short: string | null;
  error: string | null;
};
