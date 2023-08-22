"use client";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./menu.module.scss";
import MonkeyTooltip, {
  TOOLTIP_POSITION,
} from "@/components/monkey/tooltip/tooltip";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { getActiveMenuItemIndexByPath, MENU_ITEMS } from "./menuHelper";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

// import {addClassToNode, removeClassFromNode} from '../../../../utils/utils';

// const CLASSES_FOR_ROUND_RADIUS = {
//     roundedOutTopLeftDirection: 'rounded-out-top-left',
//     roundedOutBottomLeftDirection: 'rounded-out-bottom-left',
//     keepOutTopLeftRadiusPosition: 'keep-out-top-left-radius-position',
//     keepOutBottomLeftRadiusPosition: 'keep-out-bottom-left-radius-position'
// };

const INDEXES_OF_THE_ACTIVE_MENU_NEIGHBOURS = { before: null, after: null };

function SideNavMenu(props: any) {
  const { isDrawerOpened } = props;

  const pathname = usePathname();

  // const [indexesOfTheActiveMenuItemNeighbours, setIndexesOfTheActiveMenuItemNeighbours] =
  //     useState({ ...INDEXES_OF_THE_ACTIVE_MENU_NEIGHBOURS });
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(
    getActiveMenuItemIndexByPath(pathname) || 0
  );

  useEffect(() => {
    handleMenuItemClick(activeMenuItemIndex);
  }, []);

  const handleMenuItemClick = (activeMenuItemIndex: number) => {
    // setSelectedMenuItem(menuItemName);
    setActiveMenuItemIndex((prevActiveMenuItemIndex) => {
      if (prevActiveMenuItemIndex !== activeMenuItemIndex) {
        updateIndexesOfTheActiveMenuItemNeighbours(activeMenuItemIndex);
        return activeMenuItemIndex;
      } else {
        return prevActiveMenuItemIndex;
      }
    });
  };
  const updateIndexesOfTheActiveMenuItemNeighbours = (
    activeMenuItemIndex: number
  ) => {
    let indexesToAssign: any = Object.assign(
      { ...INDEXES_OF_THE_ACTIVE_MENU_NEIGHBOURS },
      {
        before: activeMenuItemIndex,
        after: activeMenuItemIndex,
      }
    );

    if (activeMenuItemIndex - 1 >= 0) {
      indexesToAssign.before = activeMenuItemIndex - 1;
    }

    if (activeMenuItemIndex + 1 <= MENU_ITEMS.length - 1) {
      indexesToAssign.after = activeMenuItemIndex + 1;
    }

    // console.log(indexesToAssign);

    // setIndexesOfTheActiveMenuItemNeighbours(indexesToAssign);
  };

  const assignClassesToActiveMenuItemNeighbours = () => {
    // if (index === indexesOfTheActiveMenuItemNeighbours.before) {
    //     return `${CLASSES_FOR_ROUND_RADIUS.roundedOutTopLeftDirection}`;
    // }
    //
    // if (index === indexesOfTheActiveMenuItemNeighbours.after) {
    //     return CLASSES_FOR_ROUND_RADIUS.roundedOutBottomLeftDirection;
    // }
    return "";
  };

  return (
    <div id={`${styles["side-nav-menu"]}`}>
      <List>
        {MENU_ITEMS?.map((routeDetails, index) => {
          return (
            <MonkeyTooltip
              title={!isDrawerOpened && routeDetails?.tooltip}
              placement={TOOLTIP_POSITION.RIGHT}
              className="menu-item-tooltip"
              key={nanoid()}
            >
              <Link
                href={routeDetails.path}
                key={routeDetails.name}
                onClick={() => handleMenuItemClick(index)}
                className={`menu-item-link ${
                  activeMenuItemIndex === index ? "active" : ""
                }`}
              >
                <ListItem
                  key={routeDetails.name}
                  disablePadding
                  className={`menu-item ${
                    isDrawerOpened ? "menu-item-opened" : "menu-item-closed"
                  } ${assignClassesToActiveMenuItemNeighbours()}`}
                >
                  <ListItemButton className={`menu-item-button`}>
                    <ListItemIcon className={`menu-item-icon`}>
                      {routeDetails.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={routeDetails.name}
                      className={`menu-item-text`}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            </MonkeyTooltip>
          );
        })}
      </List>
    </div>
  );
}

export default SideNavMenu;
