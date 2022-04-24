import React from "react";

//react-router-dom
import { useParams } from "react-router-dom";

//styled-components
import styled from "styled-components";

//data
import { productList } from "../data";

//useSelector and useDispatch
import { useDispatch, useSelector } from "react-redux";

//cartAction
import { addItem, removeItem } from "../Redux/Cart/cartAction";

//helper
import {isInCart} from "../helper/function"

//react-icons

import {FcCheckmark} from "react-icons/fc"

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
  font-size: 20px;
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

const Div =styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;

  span{
    color: green;
  }

  button{
    border: 1px solid red;
    &:hover{
      background-color: red;
      color: #fff;
    }
  }
`

const ProductDetail = () => {
  const { id } = useParams();

  const product = productList[id - 1];
  const { img, title, desc, price } = product;

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <Container>
      <DetailContainer>
        <h2>{title}</h2>
        <p>{desc}</p>
        <h3>{price} هزار تومان</h3>
        
          {!isInCart(state, product.id) ? (
            <button onClick={() => dispatch(addItem(product))}>
              افزودن به سبد خرید
            </button>
          ) : (
            <Div>
              <span>به سبد خرید شما اضافه شد <FcCheckmark/></span>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(product))}
              >
                حذف از سبد خرید
              </button>
            </Div>
          )}
        
      </DetailContainer>
      <ImgContainer>
        <img src={img} alt="" />
      </ImgContainer>
    </Container>
  );
};

export default ProductDetail;
