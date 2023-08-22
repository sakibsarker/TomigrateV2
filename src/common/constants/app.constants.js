import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const THEME_APPEARANCE = {
  DARK_MODE: "dark",
  LIGHT_MODE: "light",
  SYSTEM_MODE: "system",
};

export const SIDE_NAV_SHOWING_OPTIONS = {
  PINNED: "pinned",
  OPENED: "opened",
  CLOSED: "closed",
  HOVER: "hover",
};

export const ROUTES_TYPES = {
  PUBLIC: "public",
  PRIVATE: "private",
};
export const ROUTES = {
  HOME: "/home",
  LOGIN: "/login",
};

export const APP_ROUTES = Object.freeze({
  unauthenticatedRoutes: [
    {
      name: null,
      icon: null,
      path: "",
    },
    { name: "Login", icon: null, path: ROUTES.LOGIN },
    {
      name: "Error Page",
      icon: null,
      path: "*",
    },
  ],
  authenticatedRoutes: [
    {
      name: "Home",
      isMenuItem: true,
      icon: <HomeOutlinedIcon />,
      path: "home",

      tooltip: "Home",
      position: 0,
    },
    {
      name: "Reports",
      isMenuItem: true,
      icon: <ArticleOutlinedIcon />,
      path: "reports",

      tooltip: "Reports",
      position: 1,
    },
    {
      name: "About",
      isMenuItem: true,
      icon: <InfoOutlinedIcon />,
      path: "about",

      tooltip: "About",
      position: 4,
    },
    {
      name: "Profile",
      isMenuItem: true,
      icon: <Person2OutlinedIcon />,
      path: "profile",

      tooltip: "Profile",
      position: 2,
    },
    {
      name: "Settings",
      isMenuItem: true,
      icon: <SettingsOutlinedIcon />,
      path: "settings",

      tooltip: "Settings",
      position: 3,
    },
    {
      name: "Error Page",
      icon: null,
      path: "*",
      isMenuItem: false,
      position: 999,
    },
  ],
});
