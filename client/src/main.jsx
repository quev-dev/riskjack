import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import store from "./app/redux-store/.store.js";
import { Provider } from "react-redux";

import "normalize.css";
import "animate.css";
import "./styles/index.scss";
import "./styles/sections.scss";
import "./styles/game.scss";
import "./styles/resize.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
