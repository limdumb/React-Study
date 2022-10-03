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
`

export default function SwitchToggle() {
  const [toggle, setToggle] = useState(false);

  async function onOffAlert() {

    let thirdAlert = new Promise ((resolve, reject) => {
      if(toggle === true){ 
        setTimeout(() => resolve("그 코딩실력에 잠이와? TIL은 썼니?"), 3000)
      } else {
        return null
      }
    })
    let result = await thirdAlert
    alert(result)
    
  }

  const onOffToggle = (() => {
    return setToggle(!toggle)
  })


  return (
    <StyleDiv>
      <div style={{
        backgroundColor: toggle ? '#2196F3' : 'gray',
        width: 70,
        height: 30,
        borderRadius: 70,
        display: "flex",
        alignItems: "center",
      }}onClick={onOffToggle}>
        <span style={{
          backgroundColor: "white",
          width: 27,
          height: 27,
          display: "inline-block",
          borderRadius: 30,
          marginLeft: 2,
        }}></span>
      </div>
    </StyleDiv>
  );
}