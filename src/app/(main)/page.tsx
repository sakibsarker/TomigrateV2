"use client";

import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Container, Button, Typography, Divider } from "@mui/material";
import { useLogoutUserMutation } from "@/slices/apiSlice";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function ProfilePage() {
  const router = useRouter();
  const [logout] = useLogoutUserMutation();
  const [token, setToken] = useLocalStorage("token", "");

  const handleLogout = async () => {
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

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4">Profile</Typography>
      <Divider style={{ margin: "20px 0", width: "100%" }} />
      <Typography
        variant="h5"
        style={{
          margin: "20px 0",
          backgroundColor: "#4CAF50",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Dashboard
      </Typography>
      <Divider style={{ margin: "20px 0", width: "100%" }} />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
}
