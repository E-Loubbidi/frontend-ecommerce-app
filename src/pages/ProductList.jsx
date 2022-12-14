import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

function ProductList() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Cycling</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products : </FilterText>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>VTT</Option>
            <Option>VTC</Option>
            <Option>Mountain</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Brand
            </Option>
            <Option>Giant</Option>
            <Option>Trek</Option>
            <Option>Specialized</Option>
            <Option>Cannondale</Option>
            <Option>B'Twin</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
}

export default ProductList;
