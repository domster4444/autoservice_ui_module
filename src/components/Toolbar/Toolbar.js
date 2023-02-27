import React from "react";
import { Link } from "react-router-dom";

//* IMPORT COMPONENTS
import MenuDropdown from "components/Dropdown/MenuDropdown";
import Avatar from "Avatar";

// ? STYLING STARTS FROM HERE
import styled from "styled-components";

//* Import assets
import Logo from "assets/images/logo/autoservice-logo.png";

const NavBar = styled.nav`
  padding: 0.55rem 0.75rem;
  background: var(--primary-blue);
  display: flex;
  align-items: center;
  ul {
    margin-bottom: 0;
    width: 100%;
    padding-left: 0;
    list-style: none;
    display: flex;
    align-items: center;
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
          margin: 1rem;
          text-decoration: none;
          color: var(--primary-white);
        }
      }
    }
  }
`;

const Toolbar = ({ menus }) => {
  return (
    <header className='roboto_regular'>
      <NavBar>
        <ul>
          <li className='logo__container'>
            <img src={Logo} alt='autoservice' className='nav__logo' />
          </li>
          <li className='menu__container'>
            <ul className='menu__list'>
              {(() => {
                return menus.map((menu, index) => {
                  return (
                    <>
                      <Link className='menu-item' key={index} to={menu.path}>
                        {menu.menuName}
                      </Link>
                    </>
                  );
                });
              })()}

              <li>
                <MenuDropdown>
                  <Avatar name='Admin' role='admin' />
                </MenuDropdown>
              </li>
            </ul>
          </li>
        </ul>
      </NavBar>
    </header>
  );
};

export default Toolbar;
