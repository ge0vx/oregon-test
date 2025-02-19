import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { KeyboardProvider } from "./context/KeyboardProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KeyboardProvider>
      <App />
    </KeyboardProvider>
  </StrictMode>,
)
