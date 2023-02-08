import React from "react";
import { createGlobalStyle } from "styled-components";
// import { useTranslation } from "react-i18next";

//* Component Import
import Toolbar from "components/Toolbar";

// ? include styling
import "styles/scss/globals.css";

const GlobalStyles = createGlobalStyle`
        *{
          margin:0;
          padding:0;
        }

        :root{
          --primary-black: #000000;
          --primary-white: #ffffff;
          --primary-blue: #0f5288;
        }
`;

function App() {
  // const { t } = useTranslation();

  return (
    <>
      <GlobalStyles />
      <Toolbar />
      {/* ============== BODY STARTS HERE   */}
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, perspiciatis?
      {/* ============== BODY  ENDS HERE   */}
    </>
  );
}

export default App;
