import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import LoggedInPrivateRoute from "routes/LoggedInPrivateRoute";

// import { useTranslation } from "react-i18next";

// * import data
import { chartData as monthlyChartData } from "library/chartData/monthly";
import { chartData as yearlyChartData } from "library/chartData/yearly";

//* import layout
import Layout from "components/DashboardLayout";

// *pages
import Login from "Pages/Login";
import PageNotFound from "Pages/PageNotFound";

// ? include styling
import "styles/scss/globals.css";
import ForgotPassword from "Pages/ForgotPassword";
import AdminHome from "Pages/Dashboard/Admin/AdminHome";
import Chat from "Pages/Chat";

import ServiceCreate from "Pages/Dashboard/Admin/ServiceRequest/Create";
import VehicleCreate from "Pages/Dashboard/Admin/Vehicle/Create";

import ServiceRequestList from "Pages/Dashboard/Admin/ServiceRequest/List";
import VehicleList from "Pages/Dashboard/Admin/Vehicle/List";
import CategoryList from "Pages/Dashboard/Admin/Category/List";
import OrganizationList from "Pages/Dashboard/Admin/Organization/List";
import ClientList from "Pages/Dashboard/Admin/Users/Client/List";
import MechanicList from "Pages/Dashboard/Admin/Users/Mechanic/List";
import AdminList from "Pages/Dashboard/Admin/Users/Admin/List";

const DashboardToolbarMenus = [];

function App() {
  // const { t } = useTranslation();

  useEffect(() => {
    if (Notification.permission !== "granted") Notification.requestPermission();
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          //* Dashboard Routes
          <Route
            path='/dashboard-monthly'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Dashboard"} path={["Admin", "Home"]}>
                  <AdminHome chartData={monthlyChartData} />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          <Route
            path='/dashboard-yearly'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Dashboard"} path={["Admin", "Home"]}>
                  <AdminHome chartData={yearlyChartData} />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          <Route path='/chat' element={<Chat />} />
          //* Service Routes
          <Route
            path='/service-create'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Service Request"} path={["Dashboard", "Create Service Request"]}>
                  <ServiceCreate />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          <Route
            path='/service-list'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Service Request"} path={["Dashboard", "Service List"]}>
                  <ServiceRequestList />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          //* Service Routes
          <Route
            path='/vehicle-create'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Vehicle Create"} path={["Dashboard", "Create Vehicle"]}>
                  <VehicleCreate />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          <Route
            path='/vehicle-list'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Vehicle List"} path={["Dashboard", "Vehicle List"]}>
                  <VehicleList />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          //* Category Routes
          <Route
            path='/category-create'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Create Category"} path={["Dashboard", "Create Category"]}>
                  <Login />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          <Route
            path='/category-list'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Category List"} path={["Dashboard", "Category List"]}>
                  <CategoryList />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          //* Organization Routes
          <Route
            path='/organization-create'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Organization"} path={["Dashboard", "Create Organization"]}>
                  <Login />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          <Route
            path='/organization-list'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Organization"} path={["Dashboard", "Organization List"]}>
                  <OrganizationList />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          //* User Routes
          {/* //? users admin */}
          <Route
            path='/users-admin'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Admin"} path={["Dashboard", "Admin Users"]}>
                  <AdminList />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          {/* //? users mechanics */}
          <Route
            path='/users-mechanics'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Mechanic"} path={["Dashboard", "Mechanic Users"]}>
                  <MechanicList />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          {/* //? users client */}
          <Route
            path='/users-client'
            element={
              <LoggedInPrivateRoute>
                <Layout menus={DashboardToolbarMenus} pageTitle={"Client"} path={["Dashboard", "Client Users"]}>
                  <ClientList />
                </Layout>
              </LoggedInPrivateRoute>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
