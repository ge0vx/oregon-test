import "react-simple-keyboard/build/css/index.css";
import { Keyboard } from "./components/Keyboard";
import { InputText } from "./components/InputText";

function App() {


  return (
      <div className="block max-w-sm p-10 bg-gray-800 border border-gray-600 rounded-lg shadow-sm card">
        <h5 className="mb-10 text-2xl font-bold tracking-tight text-white text-center">
          User Login
        </h5>
        <InputText />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Keyboard />
        </div>
      </div>
  )
}

export default App;
