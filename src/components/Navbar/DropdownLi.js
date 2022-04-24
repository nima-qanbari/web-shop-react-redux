import React from "react";

//react-router-dom
import { Link } from "react-router-dom";

//styled-components
import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
  display: ${({ dropdown }) => (dropdown ? "block" : "none")};

  li {
    width: 100%;
    color: #000 !important;
    padding: 5px 10px 5px 0;
    user-select: none;
    color: #313335 !important;

    a {
      color: #424140;
    }
    &::before {
      content: "_";
      width: 12px;
      margin-top: -5px;
    }

    &:hover {
      background-color: #f9f9f9 !important ;
    }
  }
`;

const DropdownLi = ({ dropdown, close }) => {
  return (
    <Ul dropdown={dropdown}>
      <li><Link onClick={close} to="/summer">تابستانی</Link></li>
      <li><Link onClick={close} to="/autumn">پاییزی</Link></li>
      <li><Link onClick={close} to="/shirt">پیراهن</Link></li>
      <li><Link onClick={close} to="/tshirt">تیشرت</Link></li>
      <li><Link onClick={close} to="/nightwear">لباس خواب</Link></li>
    </Ul>
  );
};

export default DropdownLi;
