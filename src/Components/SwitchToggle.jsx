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
      if(toggle === true) {
        setTimeout(() => resolve("그 코딩실력에 잠이와? TIL은 썼니?"),3000)
      }
    });
    let result = await thirdAlert;
    alert(result);
    
    console.log(result)
  };

  const onOffToggle = (() => {
    return setToggle(!toggle)
  })

  onOffAlert()

  return (
    <StyleDiv>
      <div style={{
        backgroundColor: toggle ? '#2196F3' : 'gray',
        width: 70,
        height: 30,
        borderRadius: 70,
        display: "flex",
        alignItems: "center",
        transition: "all"
      }}onClick={onOffToggle}>

        <span style={{
          backgroundColor: "white",
          width: 27,
          height: 27,
          display: "inline-block",
          borderRadius: 30,
          marginLeft: 2,
          marginRight: 2,
          transition: "transform 300ms ease-out",
          transform: toggle ? "translate(37px, 0px)" : "translate(0px, 0px)"
        }}></span>

      </div>
    </StyleDiv>
  );
}