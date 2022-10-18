import { useState } from "react";
import styled from "styled-components";

//기본 fram을 짠다
// 왼쪽,오른쪽으로 이동하는 값을 짜준다
// 3항 연산자로 변경한다
// on off 값에 맞춰서 css를 변경

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/a853ef6acc4745bda06ce92b2ed27906/066cea7daa784300aa9ee733246020d1_1590672129.gif");
  background-size: cover;
  height: 100%;
`;
const 소감 =
  "이번 스터디 모두 고생 많았습니다 :) 부족한 스터디장 이라서 많이 도움이 되었을지는 모르겠지만 모두 잘 따라와 주셔서 너무 기뻐요! 다음 시즌2도 더 좋은 컨텐츠로 찾아뵙겠습니다!🌈";

export default function SwitchToggle() {
  const [toggle, setToggle] = useState(false);

  const onOffAlert = async () => {
    setToggle(!toggle);
    let alertContent = new Promise((resolve) => {
      if (!toggle) {
        setTimeout(() => resolve(소감), 3000);
      }
    });

    let result = await alertContent;

    alert(result);
  };

  console.log(toggle);
  return (
    <StyleDiv>
      <h1 style={{
        color: "purple"
      }}>나의 마음을 UN Lock 🗝</h1>
      <div
        style={{
          backgroundColor: toggle ? "#1f88de" : "#AEAEAE",
          width: 110,
          height: 38,
          borderRadius: 50,
          transition: "all",
          cursor: "pointer",
          marginTop:50
        }}
        onClick={onOffAlert}
      >
        <span
          style={{
            width: 36,
            height: 36,
            backgroundColor: "white",
            display: "inline-block",
            borderRadius: 50,
            marginTop: 1,
            marginLeft: 1,
            cursor: "pointer",
            transition: "transform ease-in-out 300ms",
            transform: toggle ? "translate(71px)" : "none",
          }}
        />
      </div>
      <h2 style={{
        color:"#2C3333"
      }}>Swith Component는 해당 토글을 클릭으로 ON/OFF기능을 둘다 하는 컴포넌트 입니다</h2>
      <h3 style={{
        color:"#2C3333"
      }}>그리고 On이 되면 3초뒤에 Alert이 뜨는 비동기 함수를 적용 하였습니다.</h3>
    </StyleDiv>
  );
}
