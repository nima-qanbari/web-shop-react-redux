import React, { useState } from "react";

//react-icons
import { MdShoppingCart } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";

//styled-components
import styled from "styled-components";

//react-router-dom
// import { Link } from "react-router-dom";

//components
import Burger from "./Burger";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0 20px;
  z-index: 30;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #24292f;
  color: #fff;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;

  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
  li {
    height: 55px;
    display: flex;
    align-items: center;
    padding:10px 19px;
    user-select: none;
    cursor: pointer;
    &:hover {
      background-color: #4f4f4f;
    }
  }

  svg {
    position: fixed;
    top: 22px;
    margin-left: 10px;
  }
  .dropdown {
    position: relative;
  }

  .dropdown ul {
    position: absolute; 
    z-index: 10;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
    border-radius: 3px;
    overflow: hidden;
    color: #000;
    display: ${({dropdown}) => dropdown ? "flex" : "none"};
    flex-direction: column;
    justify-content:center ;
    align-items: center;
    width: 100%;

    li {
      width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;

     &:hover{
      background-color: #111;
      opacity:.5;
      color: #fff;
     }
    }
  }
`;

const Div = styled.div`
  position: relative;

  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    padding-bottom: 2px;
    padding-left: 1px;
    width: 15px;
    height: 15px;
    position: absolute;
    top: -7px;
    right: -5px;

    border-radius: 100%;
    span {
      font-size: 14px;
      user-select: none;
    }
  }
  svg {
    font-size: 25px;
    margin-bottom: -5px;
    cursor: pointer;
  }

`;

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  return (
    <Nav>
      <div>
        <Burger />
        <Ul dropdown={dropdown}>
          <li>صفحه اصلی</li>
          <li onClick={dropdownHandler} className="dropdown">
            <div >
              محصولات
              <AiFillCaretDown />
              <ul>
                <li>a</li>
                <li>c</li>
                <li>c</li>
                <li>cd</li>
                <li>cd</li>
              </ul>
            </div>
          </li>
          <li>ورود</li>
          <li>ثبت نام</li>
        </Ul>
      </div>
      <Div>
        <div>
          <MdShoppingCart />
        </div>
        <div className="counter">
          <span>0</span>
        </div>
      </Div>
    </Nav>
  );
};

export default Navbar;
