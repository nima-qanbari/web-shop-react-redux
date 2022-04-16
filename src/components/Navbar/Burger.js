import React, { useState } from "react";

//styled-components
import styled from "styled-components";
import NavbarClick from "./NavbarClick";
const Div = styled.div`
  display: none;
  width: 2rem;
  height: 1.8rem;
  position: fixed;
  top: 13px;
  right: 20px;
  z-index: 200;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#f1f1f1" : "#fff")};
    border-radius: 10px;
    transform-origin: 3px;
    transition: all 0.2s linear;
    :nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false)
  }
  return (
    <div>
      <Div open={open} onClick={openHandler}>
        <div></div>
        <div></div>
        <div></div>
      </Div>
      <NavbarClick open={open} close={closeHandler}/>
    </div>
  );
};

export default Burger;
