import React from "react";

//react-router-dom
import { useParams } from "react-router-dom";

//styled-components
import styled from "styled-components";

//data
import { productList } from "../data";

const Container = styled.div`
  margin: 80px auto 0 ;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  min-height: 60vh;
  padding: 20px;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
  
  }

`;

const ImgContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex: 1;

img {
  width: 300px;
  height: 300px;
  border-radius: 3px;
  margin:-80px 30px 0 0 ;

  @media (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin: 0;
  
  }
}
`;

const DetailContainer = styled.section`
flex: 2;

p {
  text-align: justify;
  margin-top: 40px;
}

h3 {
  font-size: 30px;
  margin: 20px 0;
}

button {
  width: 130px;
  border: 1px solid teal;
  padding: 10px 0;
  margin: 20px 0;
  cursor: pointer;
  border-radius: 3px;
  transition: all .2s ease;


  &:hover {
    background-color: teal;
    color: #fff;

  }
}
`;

const ProductDetail = () => {
  const { id } = useParams();

  const product = productList[id - 1];
  const { img, title, desc, price } = product;

  return (
    <Container>
      <DetailContainer>
        <h2>{title}</h2>
        <p>{desc}</p>
        <h3>$ {price}</h3>
        <button>افزودن به سبد خرید</button>
      </DetailContainer>
      <ImgContainer>
        <img src={img} alt="" />
      </ImgContainer>
    </Container>
  );
};

export default ProductDetail;
