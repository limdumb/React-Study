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

  const [toggle ,setToggle] = useState(false)

  const switchToggle = (() => {
    setToggle(!toggle)
  })

  console.log(toggle)
  return (
    <StyleDiv>
      <div style={{
        backgroundColor: toggle ? "#1f88de" : "#AEAEAE",
        width: 110,
        height: 38,
        borderRadius: 50,
        transition: "all",
        cursor:"pointer"
      }}onClick={switchToggle}>


      <span style={{
        width: 36,
        height: 36,
        backgroundColor: "white",
        display: "inline-block",
        borderRadius: 50,
        marginTop: 1,
        marginLeft: 1,
        cursor: "pointer",
        transition:"transform ease-in-out 300ms",
        transform: toggle ? 'translate(71px)' : "none"
      }}/>
      </div>
    </StyleDiv>
  );
}