import { createFetchero } from "fetchero";
import { getToken } from "./token";

export const api = createFetchero({
  baseUrl: "https://cv-builder-ccht.onrender.com",

  onRequest: (config) => {
    const token = getToken();

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
});
