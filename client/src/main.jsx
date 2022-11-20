import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./style/animation.css";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);
