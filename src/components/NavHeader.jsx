import React from "react";
import styled from "styled-components";
import hiltonLogo from "../assets/hiltonbrandlogo.jpg"

const NavHeaderContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
font-size: 20px;
background: #1c1c1c;
color: white;
height: 86px;
border-bottom: 2px solid #474747;
`

const Title = styled.h1`
  color: white;
  font-size 32px;
`

const BackButton = styled.div`
  margin 10px 0px 10px 20px;
  height: 30px;
  background-color: #2d2d2d; 
  background-image: linear-gradient(#2f2f2f, #040404);
  color: white;
  width: 100px;
  font-size: 26px;
  font-weight: bold;
`;

const Logo = styled.img`
  height: 40px;
  width: 50px;
  margin-right: 20px;
`

export const NavHeader = () => {
    return (
      <NavHeaderContainer>
        <BackButton>{"<"}&nbsp;&nbsp;Back</BackButton>
        <Title>Hotel Details</Title>
        <Logo src={hiltonLogo}></Logo>
      </NavHeaderContainer>
    )
  }
  