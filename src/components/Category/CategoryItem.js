import React from "react";
//react-router-dom
import { Link } from "react-router-dom";

//styled-components
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  margin: 3px;

  @media (max-width: 768px) {
      height: 55vh;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    z-index: 2;
    color: #fff;
    margin-bottom: 30px;
    font-size: clamp(1.5rem, 3vw, 2.9rem);
  }

  a {
      background-color: #fff;
      padding: 10px 12px;
      color: gray;
      text-decoration: none;
      font-weight: 600;
      cursor: pointer;
      transition: all .2s ease;
    &:hover {
        background-color: #111;
        opacity: .8;
        color: #fff;
    }
  }
  @media (max-width: 768px){
    font-size: 15px;
  }

  @media (max-width: 500px) {
    a {
      font-size: 14px;
    }
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <img src={item.img} alt="" />
      <Info>
        <h1>{item.title}</h1>
        <Link
          to={
            item.id === 1
              ? "/shirt"
              : item.id === 2
              ? "/tshirt"
              : "/autumn"
          }
        >
          مشاهده بیشتر 
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
