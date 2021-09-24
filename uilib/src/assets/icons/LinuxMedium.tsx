import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function LinuxMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.804 22.32c.864 0 1.68-.528 2.184-1.2.6-.768 2.592-1.128 2.592-2.112 0-.48-.384-.816-.648-1.2-.36-.432-.192-1.2-.72-1.656-.096-.096-.24-.168-.336-.24a5.19 5.19 0 00.168-1.224c0-3.576-3.552-5.16-3.552-7.752v-.768c0-2.184-.36-4.488-3.072-4.488-2.352 0-3.216 1.32-3.216 3.528 0 .624.096 1.224.096 1.824 0 3-3.936 4.92-3.528 8.592-.24.264-.432.576-.672.84-.48.48-1.584.264-1.584 1.488 0 .336.144.672.144 1.032s-.24.72-.24 1.128c0 .504.312.84.792.96.84.24 1.728.12 2.544.528.576.288 1.152.48 1.776.48.6 0 1.488-.288 1.656-.96.648-.072 1.248-.288 1.896-.288.672 0 1.344.216 2.04.168.24.816.816 1.32 1.68 1.32zm-11.88-2.232c0-.384.192-.696.192-1.104 0-.36-.12-.696-.12-1.056 0-.12.024-.216.072-.312.264-.48.984-.432 1.368-.816.168-.168.312-.408.48-.6.168-.192.24-.312.528-.36.48 0 .72.192 1.008.6.312.432.528.936.768 1.392.192.36.456.696.696 1.008.312.456.936 1.08.936 1.656 0 .696-.6 1.104-1.272 1.104-.552 0-1.08-.168-1.608-.408-.552-.288-1.2-.384-1.824-.456-.312-.048-.984-.072-1.176-.36-.048-.096-.048-.192-.048-.288zm3.168-5.856c0-1.056.624-2.256 1.176-3.144-.288 1.032-.936 1.536-.936 2.76 0 .504.168.984.456 1.368.072-2.496 1.92-4.44 2.112-6.912.408.384 1.032.864 1.632.864.552 0 1.992-.792 2.4-1.2.336 1.296.84 2.616 1.464 3.792.432.816.768 1.68.936 2.592.168-.024.288.024.432.048.12-.288.168-.6.168-.888 0-1.392-1.2-2.688-1.2-2.736 0 0-.024-.024 0-.048.816.72 1.488 1.992 1.488 3.096 0 .24 0 .456-.072.696.432.096 1.296.696 1.296 1.2l-.024.12-.168-.024.024-.096c0-.6-1.392-1.056-1.896-1.056-.336 0-.528.312-.576.6l-.24.12h-.024c-.864.48-.84 1.8-.888 2.688-.024.312-.192.936-.312 1.272-.744.456-1.608.792-2.496.792a3.317 3.317 0 01-1.776-.504c-.192-.312-.36-.624-.624-.888.312-.072.576-.192.576-.552 0-1.608-2.928-1.92-2.928-3.96zM9.66 5.76c0-.408.216-1.008.672-1.008.552 0 .792.744.792 1.176v.096a1.162 1.162 0 00-.432.168c0-.192-.072-.696-.384-.696-.192 0-.288.336-.288.504 0 .192.048.432.192.6-.048.024-.192.144-.264.192-.24-.288-.288-.672-.288-1.032zm.024 1.752c0-.264.696-.72.744-.696.264-.288.6-.552 1.08-.552.384 0 2.328.744 2.328 1.128 0 .504-.504.744-.912.888-.552.216-.744.6-1.416.6-.456 0-1.824-.912-1.824-1.368zm.168.072c.504.264 1.008.792 1.536.792.84 0 1.8-.864 2.112-.864l-.024-.168c-.432 0-1.224.84-2.112.84-.432 0-.96-.552-1.512-.816v.216zM11.868 6c0-.6.24-1.464.984-1.464.648 0 1.056.696 1.056 1.272a1.6 1.6 0 01-.288.936c-.168-.024-.336-.144-.504-.192.096-.168.12-.384.12-.576 0-.264-.12-.648-.456-.648-.408 0-.456.552-.456.864-.168-.096-.312-.168-.456-.192zm2.688 14.616c0-.84.528-1.656.576-2.544 0-.648.048-1.584.432-2.136a.838.838 0 00.216-.144c.144.504.312 1.08.96 1.08.408 0 .96-.264 1.224-.552h.216c.168 0 .36 0 .528.072.072 0 .144.048.192.096.384.264.288 1.224.672 1.656.216.24.528.552.528.888 0 .384-1.968 1.176-2.496 1.824-.432.528-1.056.984-1.776.984-.696 0-1.272-.504-1.272-1.224z"
        fill={color}
      />
    </Svg>
  );
}

export default LinuxMedium;
