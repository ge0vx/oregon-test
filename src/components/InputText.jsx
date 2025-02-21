/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useKeyboard } from "../context/KeyboardProvider";
import { hideString, isEmailFormat } from "../helpers/utils";

export const InputText = ({
  required = false,
  tabIndex,
  id,
  name,
  inputType,
  placeholder,
  label,
  hideInputValue = false,
  renderIcon = null,
  inputDataHandler,
  isDataInputError = false,
}) => {
  const { focusedItem, setFocusedItem, setKeyboardListener } = useKeyboard();
  const [inputValue, setInputValue] = useState("");
  const initialInputValueError = required && "Filed is required";
  const [inputValueError, setInputValueError] = useState(
    initialInputValueError
  );
  const [entryErrorMessage, setEntryErrorMessage] = useState("");
  const valueDisplayed =
    inputValue && hideInputValue ? hideString(inputValue) : inputValue;
  const InputTextIcon = renderIcon?.();
  const isActive = focusedItem === id;
  // todo we can resolve inputType hardcode comparation with typescript
  const isPassword = inputType === "password";
  const isEmail = inputType === "email";

  useEffect(() => {
    inputValueError
      ? inputDataHandler?.({ name, inputValue: null })
      : inputDataHandler?.({ name, inputValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const handleCharacterClick = () => () => {
    setInputValue(inputValue);
    if (focusedItem !== id) {
      setFocusedItem(id);
      setKeyboardListener(handleKeyboardInput);
    }
  };

  const handleFocus = () => {
    setFocusedItem(id);
    setKeyboardListener(handleKeyboardInput);
  };

  const handleKeyboardInput = () => (keyValue) => {
    setInputValue((preInputValue) => {
      const clearedInputValue = clearKeyboardInput(keyValue, preInputValue);
      checkInputDataError(clearedInputValue);
      return clearedInputValue;
    });
  };

  const clearKeyboardInput = (keyValue, preInputValue) => {
    let newValue = "";
    switch (keyValue) {
      case "{bksp}":
        if (preInputValue.length >= 0) {
          newValue = preInputValue.substring(0, preInputValue.length - 1);
        }
        break;
      case "{space}":
        isEmail && setEntryErrorMessage("No space allowed");
        newValue = preInputValue;
        break;
      case "{tab}":
        newValue = preInputValue;
        break;
      default:
        setEntryErrorMessage(null);
        newValue = preInputValue + keyValue;
        break;
    }
    return newValue;
  };

  const checkInputDataError = (inputValue) => {
    if (required && inputValue.length === 0) {
      setInputValueError("Filed is required");
    } else if (isEmail && !isEmailFormat(inputValue)) {
      setInputValueError("E-mail is not valid");
    } else {
      setInputValueError("");
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-md font-medium text-gray-50">
        {label}
      </label>
      <div className="flex text-gray-50">
        <div className="flex-grow">
          <div
            tabIndex={tabIndex}
            onFocus={handleFocus}
            className={`input-text-content w-full border rounded-lg bg-gray-700 
                ${isActive ? "border-blue-600" : "border-gray-200"}`}
          >
            <div className="value-displayed pl-4 pr-4">
              <span className="opacity-25">
                {!isActive && !valueDisplayed && placeholder}
              </span>
              {valueDisplayed &&
                valueDisplayed.split("").map((char, index) => (
                  <span key={index} onClick={handleCharacterClick(index)}>
                    {char}
                  </span>
                ))}
              {isActive && <div className="cursor" />}
            </div>
          </div>
          <div className="input-text-feedback">
            {inputValue && isPassword && !hideInputValue && (
              <div className="progress">
                <div className="progress-bar-red" />
              </div>
            )}

            {entryErrorMessage && (
              <div className="validation">
                <div className="text-sm text-red-400">{entryErrorMessage}</div>
              </div>
            )}

            {isDataInputError && inputValueError && (
              <div className="validation">
                <div className="text-sm text-red-400">{inputValueError}</div>
              </div>
            )}
          </div>
        </div>
        {InputTextIcon && (
          <div className="w-12 ml-4 flex-none">
            <div className={`input-text-icon w-full`}>{InputTextIcon}</div>
          </div>
        )}
      </div>
    </div>
  );
};
