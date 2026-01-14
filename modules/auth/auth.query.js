import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { loginUser, logoutUser, registerUser } from "./auth.service";

export const useRegisterUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Registration successful.Please login");
      router.replace("/auth/login");
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "Registration failed"),
  });
};

export const useLoginUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (!data?.accessToken) {
        toast.error("login failed");
        return;
      }

      localStorage.setItem("token", data.accessToken);

      toast.success("login successful");
      router.replace("/dashboard");
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "Login failed"),
  });
};

export const useLogoutUser = (onLogout) => {
  const router = useRouter();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      localStorage.removeItem("token");

      toast.success("Logged out");
      router.replace("/auth/register");
    },
    onError: () => toast.error("Logout failed"),
  });
};
