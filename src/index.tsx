import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const defaultContextValue = {
  username: "jinshuo",
};
export const appContext = React.createContext(defaultContextValue);

ReactDOM.render(
  <React.StrictMode>
    <appContext.Provider value={defaultContextValue}>
      <App />
    </appContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
