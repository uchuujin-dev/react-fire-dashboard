import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DarkModeContextProvider } from "./context/darkModeContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </StrictMode>
);

// todo
// make states for the widgets and make them editable
