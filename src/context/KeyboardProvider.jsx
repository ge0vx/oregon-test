import { createContext, useContext, useState } from "react";

const KeyboardContext = createContext({
    keyboardListener: () => {},
    setKeyboardListener: () => {}
});

// eslint-disable-next-line react/prop-types
export const KeyboardProvider = ({children}) => {
    const [keyboardListener, setKeyboardListener] = useState(null);

    return(
        <KeyboardContext.Provider
            value={{
                keyboardListener,
                setKeyboardListener,
            }}
        >
            {children}
        </KeyboardContext.Provider>
    )
}

export const useKeyboard = () => {
    return useContext(KeyboardContext);
}