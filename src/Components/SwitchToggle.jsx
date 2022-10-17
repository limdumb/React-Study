import { useState } from "react";
import styled from "styled-components";

//기본 fram을 짠다
// 왼쪽,오른쪽으로 이동하는 값을 짜준다
// 3항 연산자로 변경한다
// on off 값에 맞춰서 css를 변경

const StyleDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function SwitchToggle() {


  return (

    <StyleDiv>
    </StyleDiv>

  );
}