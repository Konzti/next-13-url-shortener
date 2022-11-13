export const URL_ENDPOINT = "/api/url";
export const SHORT_QUERY = "/api/short?url=";
export const BASE_URL = process.env.NODE_ENV === "production" ? process.env.URL : "http://localhost:3000";
export const SHORT_LENGTH = 5;
export const REDIS_KEY = "urls";
