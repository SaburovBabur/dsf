import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import "styles/tailwind.css";
import "styles/custom.css";
import AlertTemplate from "cmp/Alert/index";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  transition: transitions.FADE,
};

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
