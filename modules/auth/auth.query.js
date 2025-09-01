import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { loginUser, registerUser } from "./auth.service";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      if (data?.accessToken) {
        localStorage.setItem("token", data.accessToken);

        console.log("Saved token:", localStorage.getItem("token"));
        toast.success("Registration successful");
      } else {
        toast.error("No token received!");
      }
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "Registration failed"),
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data?.accessToken) {
        localStorage.setItem("token", data.accessToken);
        console.log("Saved token:", localStorage.getItem("token"));
        toast.success("Login successful");

        queryClient.invalidateQueries(["userProfile"]);
      } else {
        toast.error("No token received!");
      }
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "Login failed"),
  });
};
