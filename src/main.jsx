import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./styles/global.scss";
import App from "./app";
import WindowBar from "./components/window.bar";

import { DeviceProvider } from "./context/device.context";
import { ValidationProvider } from "./context/validation.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WindowBar />
    <DeviceProvider>
      <ValidationProvider>
        <App />
      </ValidationProvider>
    </DeviceProvider>
  </React.StrictMode>
);
