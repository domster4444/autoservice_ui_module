import React from "react";

//* Component Import
import Toolbar from "components/Toolbar";
import SideDrawer from "./SideDrawer";
import Breadcrumb from "components/Breadcrumb";
import FeaturedLeaf from "./FeaturedLeaf";

const Layout = ({ menus, pageTitle, path, children }) => {
  return (
    <>
      <div className='db-body-bg'>
        <Toolbar menus={menus} />

        <main className='d-flex mt-3'>
          <div id='dashboard-aside' className='dashboard-left ms-3'>
            <SideDrawer />
          </div>

          <div id='dashboard-body' className='dashboard-right position-relative mx-3 rounded-2  p-3'>
            <FeaturedLeaf>
              <i className='bx bx-category-alt text-white'></i>
            </FeaturedLeaf>
            <h4 className='my-2 ms-4 text-primary-blue dashboard-body-title'>{pageTitle}</h4>
            <Breadcrumb tagArray={path} />
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
