import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./contexts/sidebarContext";

ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
