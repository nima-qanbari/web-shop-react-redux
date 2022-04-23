import React from "react";

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

const DropdownLi = ({ dropdown }) => {
  return (
    <Ul dropdown={dropdown}>
      <li>تابستانی</li>
      <li>پاییزی</li>
      <li>پیراهن</li>
      <li>تیشرت</li>
      <li>لباس خواب</li>
    </Ul>
  );
};

export default DropdownLi;
