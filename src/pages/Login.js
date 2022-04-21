//styled-components
import { useState, useEffect } from "react";
//react-router-dom
import { Link } from "react-router-dom";

//image
import image from "../images/signin.webp";

//react-toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { notify } from "../components/Validate/toast";

//styled-components
import styled from "styled-components";

//validate
import { validate } from "../components/Validate/validate";


const Container = styled.div`
  margin-top: 55px;
  padding: 100px 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${image}) right;
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


  @media (max-width:768px) {
  width: 75%;
}



`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 40%;
  margin-top: 14px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 8px 18px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 15px 0;
  border-radius: 3px;
  transition: all .2s ease;
  &:hover {
    background-color: #004942;
  }

  
`;

const TextLink = styled.p`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin: 5px 6px 0px 0px;
    color: red;
    font-size: 12px;
    font-weight: 500;
  }
`;

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
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
      notify("You sign in successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        username: true,
        password: true,
      });
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>ورود</Title>
        <Form onSubmit={submitHandler}>
          <Div>
            <Input
              style={{
                border:
                  errors.username && touched.username ? "1px solid red" : "",
              }}
              placeholder="نام کاربری"
              type="text"
              name="username"
              value={data.username}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.username && touched.username && (
              <span>{errors.username}</span>
            )}
          </Div>

          <Div>
            <Input
              style={{
                border:
                  errors.password && touched.password ? "1px solid red" : "",
              }}
              placeholder="رمز عبور"
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </Div>
          <Button type="submit">ورود</Button>
          {/* <TextLink>DO NOT YOU REMEMBER THE PASSWORD?</TextLink> */}
          <Link to="/signup">
            <TextLink>ساختن حساب کاربری</TextLink>
          </Link>
        </Form>
      </Wrapper>
      <ToastContainer />
    </Container>
  );
};

export default Login;
