import { useRef, useState } from "react";
import { KeyboardReact } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useKeyboard } from "../context/KeyboardProvider";

export const Keyboard= () => {
  const keyboard = useRef();
  const [layout, setLayout] = useState("default");
  const { keyboardListener } = useKeyboard();

  const onKeyPress = (key) => {
    if (key === "{shift}" || key === "{lock}") return handleShift();
    keyboardListener?.(key);
  };

  //keyboard's default and lock layouts
  const keyboardLayout = {
    default: [
      "[◂ ▸] 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} q w e r t y u i o p [ ] \\",
      "{lock} a s d f g h j k l ; ' {enter}",
      "{shift} z x c v b n m , . / {shift}",
      ".com @ {space}",
    ],
    shift: [
      "[◂ ▸] ! @ # $ % ^ &amp; * ( ) _ + {bksp}",
      "{tab} Q W E R T Y U I O P { } |",
      '{lock} A S D F G H J K L : " {enter}',
      "{shift} Z X C V B N M &lt; &gt; ? {shift}",
      ".com @ {space}",
    ],
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  return (
    <KeyboardReact
        keyboardRef={keyboard.current}
        layoutName={layout}
        layout={keyboardLayout}
        onKeyPress={onKeyPress}
    />
  )
}
