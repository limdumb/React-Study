// import ContainedButton from 'src/Components/button.jsx'
import React, { Component } from 'react'
import styled from 'styled-components'
import ClickButton from '../Components/button'

const MyDiv = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
`
export default function Home() {

  return(
    <MyDiv>
      <h1>First React Study Assignment</h1>
      <ClickButton></ClickButton>
    </MyDiv>
  )
}