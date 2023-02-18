import React from "react";
//* Component Import
import Toolbar from "components/Toolbar";

// import {useUser} from 'service '

const Layout = ({ children }) => {
  //   const { user, error, isLoading } = useUser();

  //   if (error) {
  //    return <div>Error.message</div>;
  //   }

  //   if (loading) {
  //     return <div> Loading ...</div>;
  //   }

  const menus = [
    {
      menuName: "login",
      path: "/login",
    },
    {
      menuName: "forgot",
      path: "/forgot-password",
    },
  ];

  return (
    <>
      <Toolbar menus={menus} />
      {children}
    </>
  );
};

export default Layout;
