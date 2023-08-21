"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import { Container, Button, Typography, Divider } from "@mui/material";

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

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
      <Typography variant="h5" style={{ margin: "20px 0", backgroundColor: "#4CAF50", padding: "10px", borderRadius: "5px" }}>
       Dashboard
      </Typography>
      <Divider style={{ margin: "20px 0", width: "100%" }} />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={logout}
      >
        Logout
      </Button>
  
    </Container>



    )
}

