import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function HandHoldingCoinLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.956 20.27c1.152.649 2.568.697 4.2-.047l8.688-4.056c.672-.312 1.128-1.008 1.128-1.824 0-1.08-.912-1.896-1.92-1.896-.288 0-.456.048-1.056.312l-.096-.192a1.91 1.91 0 00-2.52-.864l-2.256.984c.264.216.504.528.648.888l2.064-.888c.432-.192.936-.024 1.128.432l.096.24-4.608 2.064a1.885 1.885 0 00-1.032-2.28l-3.696-1.704c-2.472-1.152-4.776-.744-6.696 1.416v5.784H3.18v-5.352c1.488-1.488 3.144-1.704 5.064-.816l3.696 1.704c.312.144.528.48.528.84 0 .648-.72 1.104-1.296.84l-3.288-1.536-.408.864 3.432 1.608c.624.288 1.32.24 2.352-.216l6.456-2.928c.528-.24 1.128.144 1.128.696a.891.891 0 01-.48.792l-8.688 4.032c-1.224.576-2.256.6-3.168.096L6.06 17.895l-.552 1.008 2.448 1.368zM9.06 6.28a3.057 3.057 0 003.048 3.072 3.063 3.063 0 003.072-3.072 3.058 3.058 0 00-3.072-3.048A3.052 3.052 0 009.06 6.279zm1.08 0c0-1.08.888-1.968 1.968-1.968 1.104 0 1.992.888 1.992 1.968a1.987 1.987 0 01-1.992 1.992 1.982 1.982 0 01-1.968-1.992z"
        fill={color}
      />
    </Svg>
  );
}

export default HandHoldingCoinLight;
