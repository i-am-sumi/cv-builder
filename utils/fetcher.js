import axios from "axios";

export const fetcher = async ({ method, path, body, headers = {} }) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const finalHeaders = {
    ...headers,
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  try {
    const { data } = await axios({
      method,
      url: `/api/v1/${path}`,
      headers: finalHeaders,
      data: body,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log("Fetcher error:", error?.response || error);
    throw error;
  }
};
