// import ContainedButton from 'src/Components/button.jsx'
import React, { Component } from 'react'
import styled from 'styled-components'
import ClickButton from '../Components/button'

const MyDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function main() {
  
  return(
    <MyDiv>
      <h1>First React Study Assignment</h1>
      <ClickButton>안녕</ClickButton>
    </MyDiv>
  )
}