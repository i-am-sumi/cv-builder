import { createFetchero } from "fetchero";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : "";

export const api = createFetchero({
  baseUrl: "https://cv-builder-ccht.onrender.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
