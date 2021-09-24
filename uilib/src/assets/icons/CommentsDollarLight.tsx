import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function CommentsDollarLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2.64 4.584v13.008l4.128-3.168H17.64v-9.84c0-.984-.816-1.8-1.8-1.8H4.44c-.984 0-1.8.816-1.8 1.8zm1.2 10.632V4.608c0-.384.312-.696.696-.696h11.232c.36 0 .672.312.672.696v8.664H6.36l-2.52 1.944zm3.84 1.008c0 .984.816 1.8 1.8 1.8h7.728l4.152 3.192V8.544c0-.984-.84-1.848-1.848-1.848v1.2c.36 0 .648.36.648.888v10.032l-2.52-1.944H9.792c-.6 0-.912-.288-.912-.648h-1.2zm.096-6.84c0 1.176.816 2.016 2.016 2.136v.72h.648v-.72c1.152-.096 1.992-.816 1.992-1.8 0-.888-.672-1.44-1.704-1.56l-.96-.12c-.672-.096-.96-.336-.96-.816 0-.6.48-.936 1.32-.936.936 0 1.32.384 1.32 1.2h.864c0-1.032-.768-1.848-1.872-1.968v-.696h-.648v.696c-1.032.12-1.8.816-1.8 1.752 0 .864.552 1.392 1.512 1.488l.984.12c.72.096 1.056.336 1.056.888 0 .672-.456.984-1.416.984-1.056 0-1.512-.384-1.512-1.368h-.84z"
        fill={color}
      />
    </Svg>
  );
}

export default CommentsDollarLight;
