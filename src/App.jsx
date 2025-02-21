import { useState, useEffect } from "react";
import "react-simple-keyboard/build/css/index.css";
import { Keyboard } from "./components/Keyboard";
import { InputText } from "./components/InputText";
import { HideControl } from "./components/HideControl";
import { isEmptyObjectProperty } from "./helpers/utils";

function App() {
  const [coverText, setCoverText] = useState(true);
  const [isDataInputError, setIsDataInputError] = useState(false);
  const [formValue, setFormValue] = useState({});

  useEffect(() => {
    if (!coverText) {
      const timeoutId = setTimeout(() => {
        setCoverText(true);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [coverText]);

  const handleFormValue = (data) => {
    if (data) {
      const { name, inputValue } = data;
      setFormValue((preSate) => {
        return {
          ...preSate,
          [name]: inputValue,
        };
      });
    }
  };

  const handleSubmit = () => {
    //If there is not data to send, shows input's error
    if (isEmptyObjectProperty(formValue)) {
      setIsDataInputError(true);
    } else {
      alert(JSON.stringify(formValue));
    }
  };

  return (
    <>
      <div className="login-card w-full py-12 max-w-2xl px-10 bg-gray-800 border border-gray-600 rounded-lg shadow-sm">
        <h5 className="text-3xl mb-12 text-white text-center">User Login</h5>
        <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <div className="col-span-2 lg:col-span-1">
            <InputText
              required
              tabIndex={1}
              id="email"
              name="email"
              inputType="email"
              placeholder="example@e-mail.com"
              label="Username"
              inputDataHandler={(data) => {
                handleFormValue(data);
              }}
              isDataInputError={isDataInputError}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <InputText
              required
              tabIndex={2}
              id="password"
              name="password"
              inputType="password"
              placeholder="password"
              label="Password"
              hideInputValue={coverText}
              renderIcon={() => (
                <HideControl
                  isHiden={coverText}
                  toggleHide={() => {
                    setCoverText(!coverText);
                  }}
                />
              )}
              inputDataHandler={(data) => {
                handleFormValue(data);
              }}
              isDataInputError={isDataInputError}
            />
          </div>
          <div className="col-span-2 text-right">
            <button
              onClick={handleSubmit}
              className="submit-button py-3 px-6 bg-green-600 text-white font-bold w-full sm:w-32 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="keyboard-wrapper">
        <Keyboard />
      </div>
    </>
  );
}

export default App;
