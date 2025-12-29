import { removeToken, setToken } from "@/utils/token";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { loginUser, logoutUser, registerUser } from "./auth.service";

export const useRegisterUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      if (!data?.accessToken) {
        toast.error("No token received!");
        return;
      }

      setToken(data.accessToken);
      toast.success("Registration successful");
      router.replace("/dashboard");
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "Registration failed"),
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (!data?.accessToken) {
        toast.error("No token received!");
        return;
      }

      setToken(data.accessToken);
      toast.success("Login successful");
      console.log("Login token:", data.accessToken);

      queryClient.invalidateQueries(["userProfile"]);
      router.replace("/dashboard");
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
      removeToken();
      localStorage.removeItem("userData");

      queryClient.clear();
      toast.success("Logged out successfully");
      if (onLogout) onLogout();
      router.replace("/auth/login");
    },
    onError: () => {
      toast.error("Logout failed. Try again!");
    },
  });
};
