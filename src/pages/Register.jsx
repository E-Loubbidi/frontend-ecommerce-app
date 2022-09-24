import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../api";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/210095/pexels-photo-210095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 20px;

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

function Register() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const isValid = (info) => Object.values(info).every((el) => el);
  const handleChange = (input) => (e) =>
    setInfo((prevInfo) => ({
      ...prevInfo,
      [input]: e.target.value,
    }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid(info)) {
      const response = await api().post("/user/signup", info);
      if (response.data.success) {
        navigate("/");
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create account</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="name" onChange={handleChange("firstName")} />
          <Input placeholder="last name" onChange={handleChange("lastName")} />
          <Input placeholder="user name" />
          <Input placeholder="email" onChange={handleChange("email")} />
          <Input placeholder="password" onChange={handleChange("password")} />
          <Input placeholder="confirm password" />
          <Button type="submit" disabled={!isValid(info)}>
            Create account
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
