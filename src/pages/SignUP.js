import React, { useState, useEffect } from "react";

//image
import img from "../images/register.jpg";

//react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify } from "../components/Validate/toast";

//styled-components
import styled from "styled-components";

//validate
import { validate } from "../components/Validate/validate";

const Container = styled.div`
  margin-top: 55px;
  padding: 100px 0;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${img}) right;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 75%;
  }



`;

const Title = styled.h2`
  font-size: clamp(1.3rem, 3vw, 2rem);
  font-weight: 500;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;

  span {
    color: red;
    font-size: 12px;
    font-weight: 500;
    margin: 5px 12px 0px 0px;
  }
`;

const Input = styled.input`
  max-height: 15px;
  min-width: 50%;
  margin: 20px 0px 0px 0px;
  padding: 15px 10px;
  border: 1px solid gray;
  border-radius: 3px;

  @media (max-width: 576px) {
    width: 95%;
  }
`;
const Button = styled.button`
  width: 50%;
  border: none;
  border-radius: 3px;
  padding: 8px 18px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 40px;
  transition: all .2s ease;
  &:hover {
    background-color: #004942;
  }
  @media (max-width: 576px) {
    width: 60%;
  }
  @media (max-width: 380px) {
    width: 97%;
  }
`;

const SignUP = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, touched]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const touchedHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("ثبت نام شما با موفقیت انجام شد", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        lastName: true,
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>ایجاد حساب کاربری</Title>
        <Form onSubmit={submitHandler}>
          <Section>
            <Input
              style={{
                border: errors.name && touched.name ? "1px solid red" : "",
              }}
              type="text"
              placeholder="نام"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </Section>

          <Section>
            <Input
              style={{
                border:
                  errors.lastName && touched.lastName ? "1px solid red" : "",
              }}
              type="text"
              placeholder="نام خانوادگی"
              name="lastName"
              value={data.lastName}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.lastName && touched.lastName && (
              <span>{errors.lastName}</span>
            )}
          </Section>

          <Section>
            <Input
              style={{
                border:
                  errors.username && touched.username ? "1px solid red" : "",
              }}
              type="text"
              placeholder="نام کاربری"
              name="username"
              value={data.username}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.username && touched.username && (
              <span>{errors.username}</span>
            )}
          </Section>

          <Section>
            <Input
              style={{
                border: errors.email && touched.email ? "1px solid red" : "",
              }}
              type="email"
              placeholder="ایمیل"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </Section>

          <Section>
            <Input
              style={{
                border:
                  errors.password && touched.password ? "1px solid red" : "",
              }}
              type="password"
              placeholder="رمز عبور"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </Section>

          <Section>
            <Input
              style={{
                border:
                  errors.confirmPassword && touched.confirmPassword
                    ? "1px solid red"
                    : "",
              }}
              type="password"
              placeholder="تکرار رمز عبور"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
          </Section>
        
            <Button type="submit">ساختن حساب</Button>
        
        </Form>
        <ToastContainer />
      </Wrapper>
    </Container>
  );
};

export default SignUP;
