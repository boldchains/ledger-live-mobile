import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeErrorRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.836 20.736c.24 0 .456-.024.672-.024l1.68-1.68c-.696.072-1.488.12-2.352.12-3.936 0-6.144-.912-6.144-2.088v-1.608c1.272.888 3.504 1.416 6.144 1.416.528 0 1.032-.024 1.536-.072l-.672-.672.672-.696c-.48.024-1.008.048-1.536.048-3.888 0-6.144-.96-6.144-2.184v-1.608c1.272.912 3.504 1.416 6.144 1.416 2.616 0 4.848-.504 6.144-1.416v2.04l.72.72.84-.84V5.736c0-2.328-3.312-3.624-7.704-3.624-4.272 0-7.704 1.296-7.704 3.624v11.328c0 2.328 3.36 3.672 7.704 3.672zM4.692 9.528V7.92c1.272.912 3.504 1.416 6.144 1.416 2.592 0 4.848-.528 6.144-1.44v1.632c0 1.224-2.328 2.208-6.144 2.208-3.888 0-6.144-.984-6.144-2.208zm0-3.792c0-1.152 2.28-2.064 6.144-2.064 3.984 0 6.144.912 6.144 2.064 0 1.272-2.328 2.208-6.144 2.208-3.888 0-6.144-.936-6.144-2.208zm9.432 15.096l1.032 1.056 2.352-2.352 2.328 2.352 1.032-1.056-2.328-2.328 2.328-2.328-1.032-1.056-2.328 2.328-2.352-2.328-1.032 1.056 2.328 2.328-2.328 2.328z"
        fill={color}
      />
    </Svg>
  );
}

export default FullnodeErrorRegular;
