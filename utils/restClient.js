import { createFetchero } from "fetchero";

export const api = createFetchero({
  baseUrl: "https://cv-builder-ccht.onrender.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});
