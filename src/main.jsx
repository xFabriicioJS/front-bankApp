import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NewProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NewProvider>
  </React.StrictMode>
);
