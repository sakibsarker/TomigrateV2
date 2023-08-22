import { APP_ROUTES } from "@/common/constants/app.constants";

export const MENU_ITEMS = APP_ROUTES.authenticatedRoutes
  .map((route) => {
    return { ...route };
  })
  .filter((routeDetails) => routeDetails?.isMenuItem);
export const getActiveMenuItemIndexByPath = (path: string) => {
  const activeMenuItemIndex = MENU_ITEMS.map(
    (menuItem) => menuItem?.path
  ).indexOf(path?.replace("/", ""));

  return activeMenuItemIndex;
};
