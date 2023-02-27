import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";
import { createGlobalStyle } from "styled-components";
import AppRoutes from "routes/AppRoutes";

// imported for redux toolkit
import { Provider } from "react-redux";
import { store } from "redux/store";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "library/utilities/i18next";
import "../node_modules/react-loading-skeleton/dist/skeleton.css";

//  imports for redux persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const GlobalStyles = createGlobalStyle`
        *{
          margin:0;
          padding:0;
        }

        :root{
          --primary-black: #000000;
          --primary-white: #ffffff;
          --primary-blue: #0f5288;
          --primary-grey: #dadbdf;
          --primary-db-bg: #f1f1f1;
 
        }
`;

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />

        <SkeletonTheme baseColor='#CED4DA' highlightColor='#F7F7F7'>
          <AppRoutes />
          <Suspense fallback={<div>Loading</div>}></Suspense>
          <ToastContainer position='top-center' autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='light' />
        </SkeletonTheme>
      </PersistGate>
    </Provider>
  </>
);

/* Registering the service worker helps make app work offline & load faster */
serviceWorkerRegistration.register();
reportWebVitals();
