import React from "react";
import InfectionMonkeyIcon from "@/assets/images/monkey-icon.svg";
import LogoutButton from "@/components/logoutButton/LogoutButton";
import ThemeMode from "@/components/theme-mode/ThemeMode";
import { toggleSideNav } from "@/slices/sideNavSlice";
import MenuIcon from "@mui/icons-material/Menu";
import { SvgIcon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch } from "react-redux";
import Image from "next/image";

export default function MonkeyAppBar() {
  const dispatch = useDispatch();

  const toggleDrawerOpen = () => {
    dispatch(toggleSideNav());
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Image src={InfectionMonkeyIcon} alt="Infection Monkey Icon" />
          </div>
          <ThemeMode />
          <LogoutButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
