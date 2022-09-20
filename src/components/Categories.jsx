import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    id: 1,
    name: "Cycling",
    img: "https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "VTT Mountain",
  },
  {
    id: 2,
    name: "Swiming",
    img: "https://images.pexels.com/photos/4652248/pexels-photo-4652248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "VTC City",
  },
  {
    id: 3,
    name: "Laptops",
    img: "https://images.pexels.com/photos/13460047/pexels-photo-13460047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "VTC City",
  },
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Categories;
