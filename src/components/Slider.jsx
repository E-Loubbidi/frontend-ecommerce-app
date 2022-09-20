import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const sliderItems = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "VTT Mountain",
    desc: "Get the latest VTT with great price ! Get flat 30% off for new arrivals",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/4652248/pexels-photo-4652248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "VTC City",
    desc: "Get the latest VTT with great price ! Get flat 30% off for new arrivals",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/13460047/pexels-photo-13460047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "VTC City",
    desc: "Get the latest VTC with great price ! Get flat 30% off for new arrivals",
    bg: "fbf0f4",
  },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: ${({ dir }) => (dir === "left" ? "10px" : "auto")};
  right: ${({ dir }) => (dir === "right" ? "10px" : "auto")};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${({ bg }) => bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 50px 0;
`;

const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow dir="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(({ id, bg, img, title, desc }) => (
          <Slide key={id} bg={bg}>
            <ImgContainer>
              <Img src={img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{title}</Title>
              <Desc>{desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow dir="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
