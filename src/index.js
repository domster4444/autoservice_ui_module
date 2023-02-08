import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "library/utilities/i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </>
);

/* Registering the service worker helps make app work offline & load faster */
serviceWorkerRegistration.register();
reportWebVitals(console.log);
