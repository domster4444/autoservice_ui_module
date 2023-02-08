import React from "react";
//* IMPORT COMPONENTS
import MenuDropdown from "components/Dropdown/MenuDropdown";

// ? STYLING STARTS FROM HERE
import styled from "styled-components";

//* Import assets
import Logo from "assets/images/logo/autoservice-logo.png";

const NavBar = styled.nav`
  padding: 0.55rem 0.75rem;
  background: var(--primary-blue);
  ul {
    align-items: center;
    display: flex;
    justify-content: space-between;
    .logo__container {
      img.nav__logo {
        height: 2rem;
      }
    }
    .menu__container {
      display: flex;
      align-items: center;
      .menu__list {
        list-style: none;
        color: white;

        .menu-item {
          cursor: pointer;
          background: red;
          margin: 1rem;
        }
      }
    }
  }
`;

const Toolbar = () => {
  return (
    <header>
      <NavBar>
        <ul>
          <li className='logo__container'>
            <img src={Logo} alt='autoservice' class='nav__logo' />
          </li>
          <li className='menu__container'>
            <ul className='menu__list'>
              <li className='menu-item'>Menu 1</li>
              <li className='menu-item'>Menu 1</li>
              <li>
                <MenuDropdown />
              </li>
            </ul>
          </li>
        </ul>
      </NavBar>
    </header>
  );
};

export default Toolbar;
