import React from "react";

//styled-components
import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
  display: ${({ dropdown }) => (dropdown ? "block" : "none")};
  background-color: ${({ dropdown }) => (dropdown ? "#ccc" : "")};
  li {
    width: 100%;
    color: #000 !important;

    &:hover {
      background-color: #111 !important;
      opacity: .5;
      color: #fff !important;
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
