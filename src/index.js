import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "library/utilities/i18next";
import "../node_modules/react-loading-skeleton/dist/skeleton.css";

// import endpoint

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <SkeletonTheme baseColor='#CED4DA' highlightColor='#F7F7F7'>
      <App />
      <Suspense fallback={<div>Loading</div>}></Suspense>
      <ToastContainer position='top-center' autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='light' />
    </SkeletonTheme>
  </>
);

/* Registering the service worker helps make app work offline & load faster */
serviceWorkerRegistration.register();
reportWebVitals(console.log);
