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
  font-weight: bolder;
`

const DisableButton = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: none;
  width: 90px;
  height: 70px;
  border-radius: 10px;
  margin-left: 10px;
  font-size: 15px;
  font-weight: bolder;
`


const StyleDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

`

export default function ClickButton() {
  const [activate, setActivate] =React.useState(false)
  console.log(activate)

  return<StyleDiv>
    <DisableButton disabled={activate} onClick={() => setActivate(true)}>Disabled</DisableButton>
    </StyleDiv>

  
}