import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { loginUser, logoutUser, registerUser } from "./auth.service";

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

export const useLogoutUser = (onLogout) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");

      queryClient.clear();

      toast.success("Logged out successfully");

      if (onLogout) onLogout();

      router.push("/auth/login");
    },
    onError: (err) => {
      toast.error("Logout failed. Try again!");
      console.error("Logout error:", err);
    },
  });
};
