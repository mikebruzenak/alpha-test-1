import React from "react";
import styled from "styled-components";

const MenuDiv = styled.div`
  margin 35px 40px;
  width: 85%
  background: lightblue;
  border-radius: 10px;
`
const menu_border = (i,max) => {
  if (i === 0) return('border-radius: 10px 10px 0 0')
  if (i === max - 1) return('border-radius: 0 0 10px 10px')
  console.log(i)
  return('')
}

const MenuElement = styled.div`
  padding:5px 20px;
  background: linear-gradient(#e8e8ee, #bfcfda); 
  ${props => menu_border(props.index, props.max)};
  border-top: 2px solid #cbcbcb;  
  border-bottom: 2px solid white;
  cursor:pointer;
  height: 70px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

export const LaunchMenu = (props) => {
  return (
    <MenuDiv>
      {props.menu.map((item,i) => <MenuElement key={i} index={i} max={props.menu.length}>
        <div>{item}</div>
        <div>></div>
      </MenuElement>)}
    </MenuDiv>
  )
}
