import { HTTP_METHODS } from "@/constants";
import { fetcher } from "@/utils/fetcher";

export const registerUser = async (user) => {
  console.log("Register payload:", user);
  return await fetcher({
    method: HTTP_METHODS.POST,
    path: "auth/register",
    body: user,
    headers: { "Content-Type": "application/json" },
  });
};

export const loginUser = async (credentials) => {
  return await fetcher({
    method: HTTP_METHODS.POST,
    path: "auth/login",
    body: credentials,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
