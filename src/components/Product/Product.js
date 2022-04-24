import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Redux/Cart/cartAction";

//helper
import { isInCart } from "../../helper/function";

//react-router-dom
import { Link } from "react-router-dom";

//styled-components
import styled from "styled-components";

//react-icons
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

const Container = styled.div`
  position: relative;
  background-color: #f5fbfd;
  border-radius: 8px;
  width: 215px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px gray;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    .backdrop {
      visibility: visible;
    }
  }
`;

const Circle = styled.section`
  background-color: #fff;
  border-radius: 100%;
  width: 190px;
  height: 190px;
  text-align: center;

  img {
    width: 190px;
    height: 190px;
  }
`;

const Backdrop = styled.section`
  visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #000;
    margin-top: 7px;
  }
  svg {
    background-color: #fff;
    opacity: 1;
    z-index: 3;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 5px;
    margin: 3px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.2s ease;
  position: relative;
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }

  &:before {
    content: attr(data-hover);
    visibility: hidden;
    opacity: 0;
    width: 80px;
    background-color: black;
    color: #fff;
    font-size: 10px;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ data }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <Circle>
        <img src={data.img} alt={data.title} />
      </Circle>

      <Backdrop className="backdrop">
        <Icon data-hover="جزییات محصول">
          <Link to={`/productDetail/${data.id}`}>
            <AiOutlineSearch />
          </Link>
        </Icon>
        {isInCart(state, data.id) ? (
          <Icon data-hover="حذف از سبد خرید">
            <FaTrash onClick={() => dispatch(removeItem(data))} />
          </Icon>
        ) : (
          <Icon data-hover="افزودن به سبد خرید">
            <MdAddShoppingCart
              onClick={() => dispatch(addItem(data))}
            />
          </Icon>
        )}
      </Backdrop>
    </Container>
  );
};

export default Product;
