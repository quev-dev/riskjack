import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "normalize.css";
import "animate.css";
import "./sass/index.scss";
import "./sass/sections.scss";
import "./sass/game.scss";
import "./sass/resize.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
