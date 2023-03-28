import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
