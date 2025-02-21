import { createContext, useContext, useState } from "react";

const KeyboardContext = createContext({
  keyboardListener: () => {},
  setKeyboardListener: () => {},
  focusedItem: null,
  setFocusedItem: () => {},
});

// eslint-disable-next-line react/prop-types
export const KeyboardProvider = ({ children }) => {
  const [keyboardListener, setKeyboardListener] = useState(null);
  const [focusedItem, setFocusedItem] = useState(null);

  return (
    <KeyboardContext.Provider
      value={{
        keyboardListener,
        setKeyboardListener,
        focusedItem,
        setFocusedItem,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboard = () => {
  return useContext(KeyboardContext);
};
