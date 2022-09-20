import { Add, Remove } from "@material-ui/icons";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import api from "../api";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${({ type }) => type === "filled" && "none"};
  color: ${({ type }) => type === "filled" && "white"};
  background-color: ${({ type }) =>
    type === "filled" ? "black" : "transparent"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Img = styled.img`
  width: 200px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 20px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  font-size: ${({ type }) => type === "total" && "24px"};
  font-weight: ${({ type }) => type === "total" && "500"};
`;

const SummaryItemText = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  background-color: black;
  text-transform: uppercase;
  cursor: pointer;
`;

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

function Cart() {
  const [cart, setCart] = useState({ items: [], totalCost: 0 });
  const handleCheckoutClick = async () => {
    console.log(
      cart.items.map(
        ({ product: { id: productId, name, price }, quantity }) => ({
          productName: name,
          quantity,
          price,
          productId,
          userId: 3,
        })
      )
    );
    const response = await api.post(
      "/order/create-checkout-session",
      cart.items.map(
        ({ product: { id: productId, name, price }, quantity }) => ({
          productName: name,
          quantity,
          price,
          productId,
          userId: 3,
        })
      )
    );
    const sessionId = response.data.sessionId;
    if (sessionId) {
      localStorage.setItem("sessionId", sessionId);
      Promise.resolve(stripePromise).then((stripe) =>
        stripe.redirectToCheckout({ sessionId })
      );
    }
  };

  useEffect(() => {
    const getCartItems = async () => {
      const response = await api.get(
        "/cart/items?token=2e6ec3a8-bccc-4649-a725-23edf4974630"
      );
      console.log(response.data);
      setCart({
        items: response.data.cartItemDtos,
        totalCost: response.data.totalCost,
      });
    };
    getCartItems();
  }, []);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.items.map(
              ({ product: { id, imageUrl, name, price }, quantity }) => (
                <>
                  <Product>
                    <ProductDetails>
                      <Img src={imageUrl} />
                      <Details>
                        <ProductName>
                          <b>Product : </b>
                          {name}
                        </ProductName>
                        <ProductId>
                          <b>ID : </b>
                          {id}
                        </ProductId>
                        <ProductColor color="black" />
                        <ProductSize>
                          <b>Size : </b> M
                        </ProductSize>
                      </Details>
                    </ProductDetails>
                    <PriceDetails>
                      <ProductAmountContainer>
                        <Add />
                        <ProductAmount>{quantity}</ProductAmount>
                        <Remove />
                      </ProductAmountContainer>
                      <ProductPrice>$ {price}</ProductPrice>
                    </PriceDetails>
                  </Product>
                  <Hr />
                </>
              )
            )}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub-Total</SummaryItemText>
              <SummaryItemText>$ {cart.totalCost}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemText>$ 30</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>$ -20</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemText>$ {cart.totalCost + 10}</SummaryItemText>
            </SummaryItem>
            <Button onClick={handleCheckoutClick}>Checkout now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
