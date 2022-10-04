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
  const [toggle, setToggle] = useState(false);

  async function onOffAlert() {
    setToggle(!toggle)
    let thirdAlert = new Promise ((resolve, reject) => {
      if(!toggle) {
        setTimeout(() => resolve("그 코딩실력에 잠이와? TIL은 썼니?"),2000)
      }
    });
    let result = await thirdAlert;
    alert(result);
    console.log(setTimeout)
  };
  



  return (
    <StyleDiv>
      <h1>My Contents Switch</h1>
      <div style={{
        backgroundColor: toggle ? '#2196F3' : '#AEAEAE',
        width: 70,
        height: 30,
        borderRadius: 70,
        display: "flex",
        alignItems: "center",
        transition: "all",
        cursor: 'grab',
      }}onClick={onOffAlert}>

        <span style={{
          backgroundColor: "white",
          width: 27,
          height: 27,
          display: "inline-block",
          borderRadius: 30,
          marginLeft: 3,
          marginRight: 1,
          transition: "transform 300ms ease-out",
          transform: toggle ? "translate(37px, 0px)" : "translate(0px, 0px)"
        }}></span>

      </div>
    </StyleDiv>
  );
}