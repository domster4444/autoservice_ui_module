import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
// import { useTranslation } from "react-i18next";

//* import layout
import Layout from "components/Layout";

// *pages
import Login from "Pages/Login";

// ? include styling
import "styles/scss/globals.css";
import ForgotPassword from "Pages/ForgotPassword";

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
        }
`;

function App() {
  // const { t } = useTranslation();

  useEffect(() => {
    if (Notification.permission !== "granted") Notification.requestPermission();
  });

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          //* Dashboard Routes
          <Route
            path='/ongoing'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path='/monthly'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path='/yearly'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          //* Service Routes
          <Route
            path='/service-create'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path='/service-list'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          //* Category Routes
          <Route
            path='/category-create'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path='/category-list'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          //* Organization Routes
          <Route
            path='/organization-create'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path='/organization-list'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          //* Users Routes
        </Routes>
      </Router>
    </>
  );
}

export default App;
