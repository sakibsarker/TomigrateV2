export const AUTH = "auth";
export const AUTHENTICATION_TOKEN = "authentication_token";
export const TOKEN_TTL_SEC = "token_ttl_sec";

// See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
  OPTIONS: "OPTIONS",
  HEAD: "HEAD",
  CONNECT: "CONNECT",
  TRACE: "TRACE",
};

export const API_ENDPOINTS = {
  LOGIN: "/login",
  LOGOUT: "/logout",
  REFRESH_AUTHENTICATION_TOKEN: "/refresh-authentication-token",
  AUTHENTICATION_STATUS: "/authentication-status",
  REGISTER: "/register",
  REGISTRATION_STATUS: "/registration-status",
};
// Auth
export const REFETCH_INTERVAL = 5 * 60;
