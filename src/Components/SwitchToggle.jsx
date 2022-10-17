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
const 소감 = "이번 스터디 모두 고생 많았습니다 :) 부족한 스터디장 이라서 많이 도움이 되었을지는 모르겠지만 모두 잘 따라와 주셔서 너무 기뻐요! 다음 시즌2도 더 좋은 컨텐츠로 찾아뵙겠습니다!🌈"

export default function SwitchToggle() {

  const [toggle ,setToggle] = useState(false)

  const onOffAlert = async () => {
    setToggle(!toggle)
    let alertContent = new Promise((resolve) => {
      if(!toggle){
        setTimeout(() => resolve(소감),3000)
      }
    })
    
    let result = await alertContent

    alert(result)
  }

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
      }}onClick={onOffAlert}>


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