import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

import { AiOutlineCaretDown } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const MenuDropdown = ({ children }) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id='dropdown-basic' className='roboto_bold d-flex background-transparent'>
          {children}
          <div className='ms-4'>
            <AiOutlineCaretDown />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className='p-2'>
          <Link to='/'>
            <Dropdown.Item className='roboto_regular rounded-2 px-4 py-2 ' href='#/action-1'>
              <FiLogOut /> <span className='ms-2'>Logout</span>
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default MenuDropdown;
