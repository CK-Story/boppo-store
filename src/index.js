import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Store from "./app/store";
import { Provider } from "react-redux";
import { AuthenticationProvider } from "./app/utils/authentication";
import { BrowserRouter } from "react-router-dom";

// Adding Context for authentication and added redux Provider, browser router
ReactDOM.render(
  <BrowserRouter>
    <AuthenticationProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </AuthenticationProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
