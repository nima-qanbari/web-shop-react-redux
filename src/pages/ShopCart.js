import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout, clear } from "../Redux/Cart/cartAction";

//react-router-dom
import { Link } from "react-router-dom";

//styled-components
import styled from "styled-components";

//images
import checkoutIMG from "../images/checkout.png"
import empty from "../images/201-2018325_img-empty-shopping-cart-gif-clipart.png"

//components
import Cart from "../components/Cart/Cart";

//helper
import { discount } from "../helper/function";

const Container = styled.div`
  margin-top: 70px;
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const Top = styled.div`
  display: flex;
  margin: 30px 0;
  align-items: center;
  justify-content: space-between;
`;

const CheckoutBtn = styled.button`
  cursor: pointer;
  border: 0;
  background-color: #000;
  font-weight: 600;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s ease;
  @media (max-width: 576px) {
    padding: 6px;
    font-size: 12px;
  }

  &:hover {
    background-color: green;
  }
`;

const ClearBtn = styled.button`
  cursor: pointer;
  border: 1.5px solid red;
  font-weight: 600;
  color: red;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s ease;

  @media (max-width: 576px) {
    padding: 6px;
    font-size: 12px;
  }

  &:hover {
    background-color: red;
    color: #fff;
  }
`;

const Bottom = styled.div`
  direction: rtl;
  display: flex;
  justify-content: space-between;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 600;
  font-size: 22px;
`;

const SummaryItem = styled.div`
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  @media (max-width: 768px) {
    font-size: ${(props) => (props.type === "total" ? "22px" : "15px")};
  }
  @media (max-width: 576px) {
    font-size: ${(props) => (props.type === "total" ? "21px" : "14px")};
  }
  @media (max-width: 380px) {
    font-size: ${(props) => (props.type === "total" ? "18px" : "13px")};
  }
`;

const SummaryItemPrice = styled.span`
  @media (max-width: 768px) {
    font-size: ${(props) => (props.type === "total" ? "22px" : "15px")};
  }
  @media (max-width: 576px) {
    font-size: ${(props) => (props.type === "total" ? "21px" : "14px")};
  }
  @media (max-width: 380px) {
    font-size: ${(props) => (props.type === "total" ? "18px" : "13px")};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.1s ease;

  &:hover {
    background-color: green;
  }
  @media (max-width: 380px) {
    font-size: 11px;
    padding: 6px;
  }
`;

const Checkout = styled.div`
  text-align: center;

  img {
    width: 270px;
    @media (max-width: 576px) {
      width: 220px;
    }
    @media (max-width: 380px) {
      width: 170px;
    }
  }
  h3 {
    color: rgb(18, 129, 18);
    @media (max-width: 576px) {
      font-size: 15px;
    }
    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
  a {
    text-decoration: none;
    color: rgb(91, 91, 238);
    font-weight: bold;
    @media (max-width: 576px) {
      font-size: 15px;
    }
    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
`;

const Clear = styled.div`
  text-align: center;
  margin-top: 10px;

  img {
    width: 200px;

    @media (max-width: 380px) {
      width: 170px;
    }
  }

  p {
    @media (max-width: 576px) {
      font-size: 15px;
    }
    @media (max-width: 380px) {
      font-size: 11px;
    }
  }

  a {
    text-decoration: none;
    color: rgb(91, 91, 238);
    @media (max-width: 576px) {
      font-size: 15px;
    }
    @media (max-width: 380px) {
      font-size: 11px;
    }
  }
`;

const ShopCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <Container>
      {state.itemsCounter > 0 && <Title>سبد خرید ({state.itemsCounter})</Title>}
      <Top>
        {state.itemsCounter > 0 && (
          <CheckoutBtn onClick={() => dispatch(checkout())}>
            پرداخت سفارش
          </CheckoutBtn>
        )}
        {state.itemsCounter > 0 && <ClearBtn onClick={() => dispatch(clear())}>حذف سبد خرید</ClearBtn>}
        
      </Top>
      {state.selectedItems.map((item) => (
        <Cart key={item.id} data={item} />
      ))}

      {state.itemsCounter > 0 && 
      
      <Bottom>
        <Summary>
          <SummaryTitle>فاکتور</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>جمع کل:</SummaryItemText>
            <SummaryItemPrice> {state.total} هزار تومان </SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>تخفیف :</SummaryItemText>
            <SummaryItemPrice> {discount(state.total)} هزار تومان</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText type="total">مبلغ پرداختی :</SummaryItemText>
            <SummaryItemPrice type="total">{state.total - discount(state.total)} هزار تومان</SummaryItemPrice>
          </SummaryItem>
          <Button onClick={() => dispatch(checkout())}>پرداخت سفارش</Button>
        </Summary>
      </Bottom>
      }
      {state.checkout && (
          <Checkout>
            <img src={checkoutIMG} alt="checkout" />
            <h3> خرید شما با موفقیت انجام شد </h3>
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </Checkout>
        )}
        {!state.checkout && state.itemsCounter === 0 && (
          <Clear>
            <img src={empty} alt="empty-card" />
            <h5>سبد خرید شما خالی است!</h5>
            <p>می‌توانید برای مشاهده محصولات به صفحه زیر بروید:</p>
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </Clear>
        )}
    </Container>
  );
};

export default ShopCart;
