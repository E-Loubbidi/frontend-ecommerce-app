import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../api";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { addProduct } from "../redux/cartSlice";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    background-color: #f8f4f4;
  }
`;

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { id, imageUrl, name, description, price } = product;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const increase = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrease = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const handleAddToCartClick = async () => {
    dispatch(addProduct(quantity));
    const response = await api.post(
      "/cart/add?token=2e6ec3a8-bccc-4649-a725-23edf4974630",
      { productId: id, quantity }
    );
    console.log(response.data);
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await api.get(`/product/${productId}`);
      setProduct(response.data);
    };
    getProduct();
  }, []);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img src={imageUrl} />
        </ImgContainer>
        <InfoContainer>
          <Title>{name}</Title>
          <Desc>{description}</Desc>
          <Price>$ {price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} onClick={decrease} />
              <Amount>{quantity}</Amount>
              <Add style={{ cursor: "pointer" }} onClick={increase} />
            </AmountContainer>
            <Button onClick={handleAddToCartClick}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Product;
