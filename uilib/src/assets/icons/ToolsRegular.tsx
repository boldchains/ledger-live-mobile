import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ToolsRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.8 21.816c.696 0 1.344-.264 1.848-.768l9.216-9.24c.408.12.792.168 1.2.168 2.76 0 5.016-2.256 5.016-5.04a5.03 5.03 0 00-5.016-5.016c-2.784 0-5.04 2.256-5.04 5.016 0 .408.048.792.168 1.2l-9.24 9.216a2.577 2.577 0 00-.768 1.848A2.622 2.622 0 004.8 21.816zM1.824 6.12l4.944 4.944.984-.984-.168-.192 1.152-1.152-.648-.648L6.912 9.24 5.688 8.016 6.84 6.84l-.648-.672-1.176 1.176L3.792 6.12 6.12 3.768l3.96 3.96.24-.24c-.048-.696-.024-1.056.048-1.416L6.12 1.824 1.824 6.12zM3.672 19.2c0-.312.096-.576.336-.816l9.864-9.864a3.492 3.492 0 01-.36-1.584 3.56 3.56 0 013.552-3.552c.576 0 1.152.144 1.632.432L16.08 6.432l1.488 1.488 2.616-2.616c.288.48.432 1.056.432 1.632a3.56 3.56 0 01-3.552 3.552c-.576 0-1.104-.12-1.584-.36l-9.864 9.888c-.24.216-.504.312-.816.312A1.127 1.127 0 013.672 19.2zm9.264-1.968l4.944 4.944 4.296-4.296-4.248-4.248c-.36.072-.72.096-1.416.048l-.24.24 3.936 3.96-2.328 2.328-1.224-1.224 1.176-1.152-.672-.672-1.176 1.152-1.224-1.224 1.152-1.176-.648-.648-1.152 1.152-.192-.168-.984.984z"
        fill={color}
      />
    </Svg>
  );
}

export default ToolsRegular;
