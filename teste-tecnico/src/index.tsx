import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { LayoutProvider } from "./providers/LayoutProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LayoutProvider>
    <App />
  </LayoutProvider>
);

reportWebVitals();
