import { useRef, useState } from "react";
import { KeyboardReact } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useKeyboard } from "../context/KeyboardProvider";
import keyNavigation from "simple-keyboard-key-navigation";

export const Keyboard = () => {
  const keyboard = useRef();
  const [layout, setLayout] = useState("default");
  const { keyboardListener } = useKeyboard();

  //default layout and lock layout for keyboard
  const keyboardLayout = {
    default: [
      "1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} q w e r t y u i o p [ ] \\",
      "{lock} a s d f g h j k l ; ' {enter}",
      "{shift} z x c v b n m , . / @",
      "{space} .com",
    ],
    shift: [
      "! @ # $ % ^ &amp; * ( ) _ + {bksp}",
      "{tab} Q W E R T Y U I O P { } |",
      '{lock} A S D F G H J K L : " {enter}',
      "{shift} Z X C V B N M &lt; &gt; ? @",
      "{space} .com",
    ],
  };

  const onKeyPress = (key) => {
    if (key === "{shift}" || key === "{lock}") return switchKeyboardLayout();
    keyboardListener?.(key);
  };

  const switchKeyboardLayout = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const keydownHandler = (keyboard) => (e) => {
    if (e.key === "ArrowUp") keyboard.modules.keyNavigation.up();
    else if (e.key === "ArrowDown") keyboard.modules.keyNavigation.down();
    else if (e.key === "ArrowLeft") keyboard.modules.keyNavigation.left();
    else if (e.key === "ArrowRight") keyboard.modules.keyNavigation.right();
    else if (e.key === "Enter") keyboard.modules.keyNavigation.press();
  };

  return (
    <KeyboardReact
      keyboardRef={keyboard.current}
      layoutName={layout}
      layout={keyboardLayout}
      onKeyPress={onKeyPress}
      enableKeyNavigation={true}
      modules={[keyNavigation]}
      onModulesLoaded={(keyboard) => {
        const keydown = keydownHandler(keyboard);
        document.addEventListener("keydown", keydown, false);
      }}
    />
  );
};
