import React from "react";
import Toolbar from "./Toolbar/Toolbar";

// import {useUser} from 'service '

const Layout = ({ children }) => {
  //   const { user, error, isLoading } = useUser();

  //   if (error) {
  //    return <div>Error.message</div>;
  //   }

  //   if (loading) {
  //     return <div> Loading ...</div>;
  //   }

  return (
    <>
      <Toolbar />
      {children}
    </>
  );
};

export default Layout;
