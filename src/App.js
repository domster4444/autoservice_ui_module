import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
// import { useTranslation } from "react-i18next";

// * import data
import { chartData as monthlyChartData } from "library/chartData/monthly";
import { chartData as yearlyChartData } from "library/chartData/yearly";

//* import layout
import Layout from "components/DashboardLayout";

// *pages
import Login from "Pages/Login";

// ? include styling
import "styles/scss/globals.css";
import ForgotPassword from "Pages/ForgotPassword";
import AdminHome from "Pages/Dashboard/Admin/AdminHome";
import Chat from "Pages/Chat";

const DashboardToolbarMenus = [];

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
            path='/dashboard-monthly'
            element={
              <Layout menus={DashboardToolbarMenus} pageTitle={"Dashboard"} path={["Admin", "Home"]}>
                <AdminHome chartData={monthlyChartData} />
              </Layout>
            }
          />
          <Route
            path='/dashboard-yearly'
            element={
              <Layout menus={DashboardToolbarMenus} pageTitle={"Dashboard"} path={["Admin", "Home"]}>
                <AdminHome chartData={yearlyChartData} />
              </Layout>
            }
          />
          //* Service Routes
          <Route
            path='/service-create'
            element={
              <Layout menus={DashboardToolbarMenus} pageTitle={"Home"} path={["Dashboard", "Update Organization"]}>
                <Login />
              </Layout>
            }
          />
          <Route
            path='/service-list'
            element={
              <Layout menus={DashboardToolbarMenus} pageTitle={"Home"} path={["Dashboard", "Update Organization"]}>
                <Login />
              </Layout>
            }
          />
          //* Category Routes
          <Route
            path='/category-create'
            element={
              <Layout menus={DashboardToolbarMenus} pageTitle={"Home"} path={["Dashboard", "Update Organization"]}>
                <Login />
              </Layout>
            }
          />
          <Route
            path='/category-list'
            element={
              <Layout menus={DashboardToolbarMenus} pageTitle={"Home"} path={["Dashboard", "Update Organization"]}>
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
              <Layout menus={DashboardToolbarMenus} pageTitle={"Home"} path={["Dashboard", "Update Organization"]}>
                <Login />
              </Layout>
            }
          />
          //* Users Routes //* Chat Routes
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
