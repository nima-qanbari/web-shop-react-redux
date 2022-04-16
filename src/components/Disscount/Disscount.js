import React from 'react'

//styled-components
import styled from "styled-components";

const Div = styled.div`
background-color: teal;
display:flex ;
justify-content: center;
align-items: center;
height: 30px;
color: #fff;
margin-top: 55px;

@media (max-width: 400px) {
  font-size: 13px;
}
`
const Disscount = () => {
  return (
    <Div>20% تخفیف برای خرید های بالای 500 هزار تومان </Div>
  )
}

export default Disscount