import React from "react";
import styled from "styled-components";
import { CheckCircleOutlineOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${({ type }) => type === "filled" && "none"};
  color: ${({ type }) => type === "filled" && "white"};
  background-color: ${({ type }) =>
    type === "filled" ? "black" : "transparent"};
`;

function SuccessPayment() {
  return (
    <Container>
      <CheckCircleOutlineOutlined
        style={{ width: "80px", height: "50px", color: "#4BB543" }}
      />
      <Title>Payment successfull !</Title>
      <Link to="/">
        <Button type="filled">Continue shopping</Button>
      </Link>
    </Container>
  );
}

export default SuccessPayment;
