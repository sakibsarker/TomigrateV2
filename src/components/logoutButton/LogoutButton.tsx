import * as React from "react";
import Button from "@mui/material/Button";
import { useLogoutUserMutation } from "@/slices/apiSlice";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { toast } from "react-hot-toast";

const LogoutButton = () => {
  const router = useRouter();
  const [token, setToken] = useLocalStorage("token", "");
  const [logout, { isSuccess, isLoading }] = useLogoutUserMutation();

  const handleButtonClick = async () => {
    try {
      await logout();
      setToken(null);

      toast.success("Logout successful");
      router.push("/login");
    } catch (e: any) {
      console.log("Logout failed", e);
      toast.error(e.message);
    }
  };

  const isLoggedIn = !!token;

  return (
    isLoggedIn && (
      <Button
        disabled={isLoading}
        onClick={handleButtonClick}
        variant="outlined"
        color="error"
      >
        {isLoading ? "Logging Out.." : "Logout"}
      </Button>
    )
  );
};

export default LogoutButton;
