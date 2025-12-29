import { api } from "@/utils/restClient";

export const registerUser = async (user) => {
  const res = await api.rest.auth.register.post({
    body: user,
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

export const logoutUser = async (token) => {
  const res = await api.rest.auth.logout.post({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
