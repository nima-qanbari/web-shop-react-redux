import React from 'react'

//styled-components
import styled from "styled-components";

//components
import Product from "../components/Product/Product";

//data
import { shirt } from '../data'

const Container = styled.div`
  margin: 150px auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 0;
  max-width: 1000px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns:repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Shirt = () => {
  return (
    <Container>
      {shirt.map((item) => <Product key={item.id} data={item} />)}
    </Container>
  )
}

export default Shirt