import InfectionMonkeyIcon from "@/assets/images/monkey-icon.svg";
import styles from "./header.module.scss";

import Image from "next/image";
function SideNavHeader() {
  return (
    <div id={styles["side-nav-header"]}>
      <Image src={InfectionMonkeyIcon} alt="Infection Monkey Icon" />
    </div>
  );
}

export default SideNavHeader;
