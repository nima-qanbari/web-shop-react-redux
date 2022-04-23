import React, { useState } from "react";

//react-icons
import { AiOutlineHome } from "react-icons/ai";
import { IoMdArrowDropleft } from "react-icons/io";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";

//styled-components
import styled from "styled-components";
import DropdownLi from "./DropdownLi";

const Ul = styled.ul`
  width: 40%;
  height: 100%;
  display: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 110;
  padding-top: 50px;
  background-color: #ffffff;
  transition: all 0.8s linear;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
  }
  li {
    position: relative;
    transition: background-color 0.1s linear;
    padding: 10px 10px 10px 0;
    color: gray;
    display: flex;
    font-weight: 600;
    font-size: 12px;
    align-items: center;
    cursor: pointer;
    width: 100%;
    user-select: none;
    &:hover {
      background-color: #f2f2f2;
    }
  }

  .align {
    display: flex;
    align-items: center;

    svg {
      margin: 0 0 0 5px;
    }
  }
  .dropdown {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    div svg {
      transition: all .2s ease;
      transform: ${({dropdown}) => dropdown ? "rotate(-90deg)" : ""};
    }
  }

`;

const NavbarClick = ({ open, close }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  return (
    <div>
      <Ul open={open} dropdown={dropdown}>
        <li className="align" onClick={close}>
          <AiOutlineHome /> صفحه اصلی
        </li>
        <li className="dropdown" onClick={dropdownHandler}>
          <div className="align">
            محصولات
            <IoMdArrowDropleft />
          </div>
          <DropdownLi dropdown={dropdown} />
        </li>
        <li className="align" onClick={close}>
          <BsBoxArrowInRight />
          ورود
        </li>
        <li className="align" onClick={close}><BiUserPin />ثبت نام</li>
        <hr />
      </Ul>
    </div>
  );
};

export default NavbarClick;
