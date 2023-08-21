"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";  // Fix this import
import { toast } from "react-hot-toast";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRegisterUserMutation } from "@/slices/apiSlice";

type UserState = {
    email: string;
    password: string;
    username: string;
};

const SignupPage: React.FC = () => {
    const router = useRouter();
    const [registerMutation, { isLoading, isError, error }] = useRegisterUserMutation();

    const [user, setUser] = React.useState<UserState>({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(true);

    const onSignup = async () => {
      try {
          await registerMutation(user);
          toast.success("Signup successful");
          router.push("/login");
      } catch (e) {
          toast.error("Signup failed");
      }
  };
  
    useEffect(() => {
        setButtonDisabled(!(user.email && user.password && user.username));
    }, [user]);

    return (
        <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="xs">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5%" }}>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Signup
                    </Typography>
                    <div style={{ width: "100%", marginTop: "2%" }}>
                        <TextField
                            fullWidth
                            id="username"
                            type="text"
                            label="Username"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            variant="outlined"
                            margin="normal"
                        />
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
                            onClick={onSignup}
                            disabled={isLoading || buttonDisabled}
                        >
                            {isLoading ? "Signing up..." : "Signup"}
                        </Button>
                        {isError && <p style={{ color: "red" }}>{JSON.stringify(error) || "An error occurred"}</p>}
                        <Typography align="center" style={{ marginTop: "5%" }}>
                            Already have an account?
                            <Link href="/login">
                                <span style={{ color: "blue", cursor: "pointer", marginLeft: "1%" }}>
                                    Login
                                </span>
                            </Link>
                        </Typography>
                    </div>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default SignupPage;
