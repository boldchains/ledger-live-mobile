import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function PlaneUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.744 21.66l2.352-2.208-1.128-3.336 3.192-3.192 4.056 7.704 1.728-1.944-2.112-9.432 3.216-3.192c.408-.384.6-.936.6-1.512 0-1.296-1.008-2.208-2.208-2.208-.648 0-1.152.288-1.728.864l-2.976 2.952L5.28 4.02l-1.896 1.8 7.704 4.008-3.216 3.192-3.312-1.056-2.208 2.28 4.848 2.64 2.544 4.776zm-6.072-7.608L4.8 12.876l3.312 1.056 4.32-4.32-7.656-4.008.768-.696 9.432 2.136 3.312-3.264c.432-.456.744-.624 1.152-.624.768 0 1.392.552 1.392 1.392 0 .384-.12.696-.336.912l-3.552 3.552 2.112 9.432-.648.768-4.032-7.632-4.344 4.32 1.128 3.312-1.2 1.128-2.16-4.056-4.128-2.232z"
        fill={color}
      />
    </Svg>
  );
}

export default PlaneUltraLight;
