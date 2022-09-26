import styled from "styled-components"
import React, { useState } from "react"

const ConsoleButton = styled.button `
  display: flex;
  justify-content: center;
  border-radius: 3px;
  background-color: #5090D3;
  border: 1px solid black;
`

const DisableButton = styled.button `
  display: flex;
  justify-content: center;
  border-radius: 3px;
  background-color: #5090D3;
  border: 1px solid black;
`

const StyleDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function ClickButton() {
  
  return<StyleDiv>
        <ConsoleButton onClick={console.log('그코잠 화이팅')}>ConsoleLog</ConsoleButton>
        <DisableButton>Disable</DisableButton>
    </StyleDiv>
  
}