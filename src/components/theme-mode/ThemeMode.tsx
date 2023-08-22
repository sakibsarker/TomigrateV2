import FormGroup from "@mui/material/FormGroup";
import styles from "./themeMode.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setThemeAppearance } from "@/slices/themeSlice";
import { THEME_APPEARANCE } from "../../common/constants/app.constants";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import IconButton from "@mui/material/IconButton";
import { FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import MonkeyTooltip, { TOOLTIP_POSITION } from "../monkey/tooltip/tooltip";

export const THEME_MODES = {
  SWITCH: "switch",
  ICON_BUTTON: "icon",
};

const DARK_TOOLTIP = "Switch to light mode";
const LIGHT_TOOLTIP = "Switch to dark mode";

/*
    props: {
        type<string>: 'switch' | 'icon'
    }
*/
const ThemeMode = (props: any) => {
  const type = props.type;
  const [componentType, setComponentType] = useState(
    type || THEME_MODES.ICON_BUTTON
  );
  const dispatch = useDispatch();
  const isThemeInDarkMode = useSelector(
    (state: any) => state.theme.themeAppearance === THEME_APPEARANCE.DARK_MODE
  );

  useEffect(() => {
    type && setComponentType(type);
  }, [type]);
  const changeThemeAppearance = () => {
    dispatch(
      setThemeAppearance(
        isThemeInDarkMode
          ? THEME_APPEARANCE.LIGHT_MODE
          : THEME_APPEARANCE.DARK_MODE
      )
    );
  };
  const renderSwitchStyle = () => {
    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isThemeInDarkMode}
              onChange={changeThemeAppearance}
            />
          }
          label="Dark mode"
        />
      </FormGroup>
    );
  };
  const renderIconButtonStyle = () => {
    return (
      <IconButton
        className={`theme-mode-button ${
          isThemeInDarkMode
            ? THEME_APPEARANCE.DARK_MODE
            : THEME_APPEARANCE.LIGHT_MODE
        }-mode`}
        onClick={changeThemeAppearance}
      >
        {isThemeInDarkMode ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    );
  };

  return (
    <div id={styles["theme-mode"]}>
      <MonkeyTooltip
        title={isThemeInDarkMode ? DARK_TOOLTIP : LIGHT_TOOLTIP}
        placement={TOOLTIP_POSITION.BOTTOM}
        className="theme-mode-tooltip"
      >
        {componentType === THEME_MODES.SWITCH
          ? renderSwitchStyle()
          : renderIconButtonStyle()}
      </MonkeyTooltip>
    </div>
  );
};

export default ThemeMode;
