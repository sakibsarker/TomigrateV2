"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { toast } from "react-hot-toast";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const router = useRouter();
  const [token, setToken] = useLocalStorage("token", "");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    try {
      await signOut();
      setToken(null);

      toast.success("Logout successful");

      router.push("/login");
      setIsLoading(false);
    } catch (e: any) {
      console.log("Logout failed", e);
      toast.error(e.message);
      setIsLoading(false);
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
