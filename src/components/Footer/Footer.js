import React from "react";

//react-icons
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

import {BsFillSuitHeartFill} from "react-icons/bs"

//react-router-dom
import { Link } from "react-router-dom";

//styled-components
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 40vh;
  background-color: #111111;
  color: #fff;
  padding: 30px;

  @media (max-width:450px){
    flex-direction: column;
  }

  h2 {
    margin-bottom: 20px;
  }

  .div {
    width: 30%;

    @media (max-width: 768px) {
      width: 50%;
    }
    @media (max-width: 450px) {
      width: 100%;
      margin: 30px 0;
    }
    p {
      font-size: 12px;
      text-align: justify;
    }

    a {
      color: #fff;
    }
    svg {
      font-size: 25px;
      border-radius: 1px;
      margin: 0 5px;
      border: 1.5px solid #fff;
      padding: 2px;
      transition: all 0.2s ease;
      &:hover {
        border: 1px solid #fff;
      }
    }
  }

  .div2 {
    width: 30%;
    margin-right: 40px;

    .links {
      display: flex;
      flex-direction: column;
    }

    a {
      color: #fff;
      font-size: 12px;
      margin: 3px 0;
    }

    @media (max-width: 768px) {
      margin-right: 0;
    }

    @media (max-width: 450px) {
      width: 100%;
    }
  }

  .nima {
    position: absolute;
    left: 20px;
    bottom: 15px;
    font-size: 12px;

    svg {
      color: red;
    }
  }
`;

const Footer = () => {
  return (
    <Section>
      <div className="div">
        <h2>درباره ما</h2>
        <div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و / کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <div></div>
      </div>
      <div className="div2">
        <h2>خدمات ما</h2>
        <div className="links">
          <Link to="#">Web Design, Development</Link>
          <Link to="#">Web UX Design</Link>
          <Link to="#">Web Development, By React</Link>
          <Link to="#">Bootstrap, SASS, CSS3, HTML5</Link>
          <Link to="#">Javascript, React, Redux</Link>
          <Link to="#">Flexbox, Grid</Link>
          <Link to="#">Rest API</Link>
        </div>
      </div>
      <div className="div">
        <h2>حمایت از ما</h2>
        <Link to="#">
          <AiFillFacebook />
        </Link>
        <Link to="#">
          <AiOutlineInstagram />
        </Link>
        <Link to="#">
          <AiOutlineTwitter />
        </Link>
        <Link to="#">
          <AiFillYoutube />
        </Link>
        <Link to="#">
          <AiFillLinkedin />
        </Link>
      </div>
      <p className="nima">made by nima <BsFillSuitHeartFill /> qanbari</p>
    </Section>
  );
};

export default Footer;
