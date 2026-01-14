import { api } from "@/utils/restClient";

export const registerUser = async (payload) => {
  const res = await api.rest.auth.register.post({
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const loginUser = async (credentials) => {
  const res = await api.rest.auth.login.post({
    body: credentials,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const logoutUser = async () => {
  const res = await api.rest.auth.logout.post({
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
