"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import { toast } from "react-hot-toast";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useLoginUserMutation } from "@/slices/apiSlice";

export default function LoginPage() {
    const router = useRouter();
    const [login, { isLoading, isError, error }] = useLoginUserMutation();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const onLogin = async () => {
      try {
          await login(user);
          toast.success("Login success");
          router.push("/profile");
      } catch (e:any) {
          console.error("Login failed", e);
          toast.error(e.message || "Login failed");
      }
  };

  React.useEffect(() => {
      if (user.email && user.password) {
          setButtonDisabled(false);
      } else {
          setButtonDisabled(true);
      }
    },[user]);

    function extractErrorMessage(error: any): string {
      if (typeof error === 'string') return error;
    
      if ('status' in error) {
        return `Error ${error.status}`;
      }
     
      if (error.message) return error.message;
      return 'An error occurred';
    }
    

    return (
      <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5%" }}>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Login
              </Typography>
              <div style={{ width: "100%", marginTop: "2%" }}>
                  <TextField
                      fullWidth
                      id="email"
                      type="email"
                      label="Email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      variant="outlined"
                      margin="normal"
                  />
                  <TextField
                      fullWidth
                      id="password"
                      type="password"
                      label="Password"
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      variant="outlined"
                      margin="normal"
                  />
                  <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "2%" }}
                      onClick={onLogin}
                      disabled={isLoading || buttonDisabled}
                  >
                      {isLoading ? "Logging in..." : "Login"}
                  </Button>
                  <Typography align="center" style={{ marginTop: "5%" }}>
                      Don't have an account? 
                      <Link href="/signup">
                          <span style={{ color: "blue", cursor: "pointer", marginLeft: "1%" }}>
                              Sign Up
                          </span>
                      </Link>
                  </Typography>
                  {isError && <p style={{ color: "red" }}>{extractErrorMessage(error)}</p>}
              </div>
          </div>
      </Container>
  </ThemeProvider>
);
}



