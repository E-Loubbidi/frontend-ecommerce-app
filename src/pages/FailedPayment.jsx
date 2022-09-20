import { HighlightOffOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

function FailedPayment() {
  return (
    <Container>
      <HighlightOffOutlined
        style={{ width: "80px", height: "50px", color: "#FC100D" }}
      />
      <Title>Payment failed !</Title>
      <Link to="/">
        <Button>Continue shopping</Button>
      </Link>
    </Container>
  );
}

export default FailedPayment;
