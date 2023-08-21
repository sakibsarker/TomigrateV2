"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";



export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5%" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {loading ? "Processing" : "Signup"}
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
              disabled={buttonDisabled}
            >
              {buttonDisabled ? "No Signup" : "Signup"}
            </Button>

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
    )

}




