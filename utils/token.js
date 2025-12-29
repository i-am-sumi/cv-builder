export const tokenKey = "token";

export const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(tokenKey);
};

export const setToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

export const removeToken = () => {
  localStorage.removeItem(tokenKey);
};
