import { HTTP_METHODS } from "@/constants";
import { fetcher } from "@/utils/fetcher";

export const getUsers = async ({ queryKey }) => {
  const [users] = queryKey;
  try {
    const data = await fetcher({
      method: HTTP_METHODS.GET,
      path: "users",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUser = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  try {
    const data = await fetcher({
      method: HTTP_METHODS.GET,
      path: `users/${id}`,
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const data = await fetcher({
      method: HTTP_METHODS.GET,
      path: "users/profile",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const data = await fetcher({
      method: HTTP_METHODS.POST,
      path: "users",
      body: user,
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUser = async (user) => {
  try {
    const data = await fetcher({
      method: HTTP_METHODS.PATCH,
      path: "users/profile",
      body: user,
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (user) => {
  try {
    const data = await fetcher({
      method: HTTP_METHODS.DELETE,
      path: "/users/profile",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    });
    return data;
  } catch (error) {
    console.log({ error });
  }
};
