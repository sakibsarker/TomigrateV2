import Zoom from "@mui/material/Zoom";
import { Tooltip } from "@mui/material";

export const TOOLTIP_POSITION = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
};

/*
  The CSS is located inside index.scss ('.MuiTooltip-tooltip') as the tooltip is a global component which is appended
   on the body
  element.
*/

//* MonkeyTooltip is a wrapper for the Tooltip component from @mui/material.
//* It is used to set default values for the Tooltip component.
//* props are forwarded to the Tooltip component.
//* props can be overridden by passing them to the MonkeyTooltip component.
//* props are: title, placement, className, key.
const MonkeyTooltip = (props: any) => {
  const { placement } = props;

  const forwardedProps = Object.assign(
    { ...props },
    {
      placement: placement || TOOLTIP_POSITION.RIGHT,
      TransitionComponent: Zoom,
    }
  );

  return <Tooltip {...forwardedProps} arrow />;
};

export default MonkeyTooltip;
