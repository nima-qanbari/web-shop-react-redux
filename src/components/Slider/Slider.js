import React, {useState} from "react";

import { Link } from "react-router-dom";

//react-icons
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs"

//styled-components
import styled from "styled-components";

//data
import {sliderItems} from "../../data"


const Container = styled.div`
  width: 100%;
  direction: ltr;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px){
    height:60vh ;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 576px){
    height: 40vh;
  }

  @media (max-width: 380px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  svg {
    font-size: 22px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;
const ImgContainer = styled.div`

  @media (max-width:576px) {
    width: 40%;
  }
`;

const Image = styled.img`
  width: 400px;

  @media (max-width: 992px) {
    width: 20rem;
  }

  @media (max-width: 768px) {
    width: 15rem;
  
  }

  @media (max-width:576px) {
    width: 13rem;
  }
`;
const InfoContainer = styled.div`
  width: 50%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width : 576px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.9rem, 2.5vw, .7rem);
  @media (max-width: 992px) {
    font-size: 1.7rem;
  }

`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 1.2rem;
  font-weight: 500;
  @media (max-width: 992px) {
font-size: 0.9rem;
}

@media (max-width: 768px) {
font-size: 0.6rem;
}

@media (max-width:576px) {
  font-size: 0.5rem;
}
`;
const Linked = styled(Link)`
  padding: 10px;
  text-decoration: none;
  border: 2px solid gray;
  color: black;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.15s ease;
  border-radius: 4px;
  font-weight: 500;

  &:hover {
    background-color: #fc6a67;
    color: white;
  }

  @media (max-width: 992px) {
    font-size: 18px;
    padding: 8px;
}

@media (max-width: 768px) {
  font-size: 16px;
  padding: 6px;
}

@media (max-width: 576px) {
  font-size: 12px;
  padding: 4px;
}


`;

const Slider = () => {
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <BsFillArrowLeftCircleFill />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Linked
                to={
                  item.id === 1
                    ? "/summer"
                    : item.id === 2
                    ? "/autumn"
                    : "/nightwear"
                }
              >
                نمایش بیشتر
              </Linked>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <BsFillArrowRightCircleFill />
      </Arrow>
    </Container>
  );
};

export default Slider;
