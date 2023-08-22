import { Drawer } from "@mui/material";
import styles from "./sidenav.module.scss";
import SideNavHeader from "./header/header";
import SideNavMenu from "./menu/menu";
import { useSelector } from "react-redux";
function SideNav() {
  const isDrawerOpened = useSelector((state: any) => state.sidenav.open);

  return (
    <div id={styles["app-sidenav"]}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={isDrawerOpened}
        className={`${isDrawerOpened ? "open" : ""}`}
      >
        <SideNavHeader />
        <SideNavMenu isDrawerOpened={isDrawerOpened} />
      </Drawer>
    </div>
  );
}

export default SideNav;
