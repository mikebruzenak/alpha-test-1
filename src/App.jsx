import React from "react";
import styled from "styled-components";
import hiltonChicago from "./assets/hotelexterior.jpg"
import hiltonLogo from "./assets/hiltonbrandlogo.jpg"
import backgroundImage from "./assets/background.png"
import { LaunchMenu } from './components/LaunchMenu'
import { NavHeader } from './components/NavHeader'

const PageContainer = styled.div`
  background-image: url(${backgroundImage});
  height: 100%; 
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  `

const Img = styled.img`
  width:85%;
  object-fit: cover;
  overflow: hidden;
  border: 7px solid white;
  margin: 45px 40px 30px 40px;
`

const HotelName = styled.h1`
  color: white;
  margin: 0px;
  padding: 0;
  font-size 36px;
`

const HotelIDContainer = styled.div`
width:85%;
padding: 0;
margin: 0;
`

const Address = styled.p`
  color: #a0bed9;
  margin: 3px 0px;
  padding: 0;
  font-size: 30px;
`

const Phone = styled.p`
  color: white;
  margin: 5px 0px;
  padding: 0;
  font-size: 30px;
  text-decoration: underline;
  -webkit-text-decoration-color: red; /* safari still uses vendor prefix */
  text-decoration-color: #a0bed9;
`

const Footer = styled.footer`
  background: black;
  height: 50px;
  color: white;
  display:flex;
  align-items: center;
  justify-content: center;
`

const App = () => {
  const menu = ['Map', 'Photo gallery', 'Amenities', 'Place1']

  return (
    <>
      <PageContainer>
        <NavHeader />
        <Img alt="" src={hiltonChicago} />
        <HotelIDContainer>
          <HotelName>Hilton Chicago</HotelName>
          <Address>720 South Michigan Avenue</Address>
          <Address>Chicago, Illinois, 60605</Address>
          <Phone>1-312-922-4400</Phone>
        </HotelIDContainer>
        <LaunchMenu menu={menu} />
      </PageContainer>
      <Footer>Copyright</Footer>
    </>
  )
}

export default App;
