import { createContext, useContext, useState } from "react";

const InputTextContext = createContext({
  inputTextObject: null,
  setInputTextObject: () => {},
});

// eslint-disable-next-line react/prop-types
export const InputTextProvider = ({ children }) => {
  const [inputTextObject, setInputTextObject] = useState({});

  return (
    <InputTextContext.Provider
      value={{
        inputTextObject,
        setInputTextObject,
      }}
    >
      {children}
    </InputTextContext.Provider>
  );
};

export const useInputText = () => {
  return useContext(InputTextContext);
};
