import React from "react";
import { useSelector } from "react-redux";


//react-icons
import { MdShoppingCart } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";

//styled-components
import styled from "styled-components";


//components
import Burger from "./Burger";

//react-router-dom
import { Link } from "react-router-dom";

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
    padding: 10px 19px;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
    &:hover {
      background-color: #2f363d;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  svg {
    position: fixed;
    top: 22px;
    margin-left: 10px;
  }
  .dropdown {
    position: relative;

    &:hover {
      ul {
        display: flex;
      }
    }
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
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 125%;
    transition: all 0.2s ease;

    a {
      color: #000;
    }
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;

      &:hover {
        background-color: rgba(226, 226, 226, 0.7);
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
    padding-top: 2px;
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
  a {
    color: #fff;

    svg {
    font-size: 25px;
    margin-bottom: -5px;
    cursor: pointer;
  }
  }

`;

const Navbar = () => {
  const state = useSelector((state) => state)

  return (
    <Nav>
      <div>
        <Burger />
        <Ul>
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className="dropdown">
            <div>
              محصولات
              <AiFillCaretDown />
              <ul>
                <li>
                  <Link to="summer">تابستانی</Link>
                </li>
                <li>
                  <Link to="/autumn">پاییزی</Link>
                </li>
                <li>
                  <Link to="/shirt">پیراهن</Link>
                </li>
                <li>
                  <Link to="/tshirt">تیشرت</Link>
                </li>
                <li>
                  <Link to="/nightwear">لباس خواب</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/login">ورود</Link>
          </li>
          <li>
            <Link to="signup">ثبت نام</Link>
          </li>
        </Ul>
      </div>
      <Div>
        <div>
          <Link to="/shopCart">
            <MdShoppingCart />
          </Link>
        </div>
        <div className="counter">
          <span>{state.itemsCounter}</span>
        </div>
      </Div>
    </Nav>
  );
};

export default Navbar;
