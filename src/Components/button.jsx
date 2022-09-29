import styled from "styled-components"
import React, { useState } from "react"
import { isDisabled } from "@testing-library/user-event/dist/utils"

const ConsoleButton = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: #5090D3;
  border: 1px solid black;
  width: 90px;
  height: 70px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #649ad5;
  color: black;
  cursor: pointer;
  }
  &:active {
  box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
  position: relative;
  top:2px;
  }
`

const DisableButton = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: none;
  background-color: #5090D3;
  width: 90px;
  height: 70px;
  border-radius: 10px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;

  &:active {
  box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
  position: relative;
  top:2px;
  }

  &:hover {
  background-color: #649ad5;
  color: black;
  cursor: pointer;
  }
`
const OnOffButton = styled.button `
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: #5090D3;
  border: 1px solid black;
  width: 90px;
  height: 70px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #649ad5;
  color: black;
  cursor: pointer;
  }
  &:active {
  box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
  position: relative;
  top:2px;
}
`

const AssignmentButton = styled.button `
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: #5090D3;
  border: 1px solid black;
  width: 90px;
  height: 70px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #649ad5;
  color: black;
  cursor: pointer;
  }
  &:active {
  box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
  position: relative;
  top:2px;
}
`

const StyleDiv = styled.div `
  display: flex;
`

export default function ClickButton() {

  const [activate, setActivate] = React.useState(false)

  const onOffToggle = (() => {
    setActivate(!activate)
  })

  if(activate === true) {
    console.log('Disabled')
  } else {
    console.log('그코잠 화이팅!')
  }

  return<StyleDiv>
    <ConsoleButton onClick={() => console.log('그코잠 화이팅!')}>Console</ConsoleButton>
    <OnOffButton onClick={() => onOffToggle(setActivate)}>On/Off</OnOffButton>
    <DisableButton disabled={activate} onClick={() => setActivate(true)}>Disabled</DisableButton>
    <a href="/assignment" style={{ textDecoration: 'none' }}>
      <AssignmentButton>Assignment Move</AssignmentButton>
    </a>
    </StyleDiv>
  
}