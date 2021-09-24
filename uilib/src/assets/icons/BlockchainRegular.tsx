import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function BlockchainRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.216 19.392l4.728 2.76L12 19.8l4.056 2.352 4.728-2.76v-5.424L17.424 12l3.36-1.968V4.608l-4.728-2.76L12 4.2 7.944 1.848l-4.728 2.76v5.424L6.576 12l-3.36 1.968v5.424zm1.344-.768v-3.24l2.832 1.608v3.264L4.56 18.624zm0-9.36v-3.24l2.832 1.608v3.264L4.56 9.264zm.552 5.16l2.952-1.704 2.832 1.632-2.952 1.704-2.832-1.632zm0-9.36l2.832-1.632 2.832 1.632-2.832 1.632-2.832-1.632zm3.384 15.192v-3.264l2.952-1.68v3.216l-2.952 1.728zm0-9.216V7.632l2.952-1.68v3.384L8.496 11.04zm.552.96L12 10.272 14.952 12 12 13.728 9.048 12zm3.504 6.528v-3.216l2.952 1.68v3.264l-2.952-1.728zm0-9.192V5.952l2.952 1.68v3.408l-2.952-1.704zm.552 5.016l2.832-1.632 2.952 1.704-2.832 1.632-2.952-1.704zm.12-9.288l2.832-1.632 2.832 1.632-2.832 1.632-2.832-1.632zm3.384 15.192v-3.264l2.832-1.608v3.24l-2.832 1.632zm0-9.36V7.632l2.832-1.608v3.24l-2.832 1.632z"
        fill={color}
      />
    </Svg>
  );
}

export default BlockchainRegular;
