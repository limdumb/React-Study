import { useState } from "react";

// overay구현 , 전면노출 팝업 구현
// dismiss
//1. 버튼을 만든다 O
//2. Overay를 구현한다[ 확인필요 ] [] button click , position absolute사용
//3. 팝업되는 창을 구현한다 [Div로 해야하나..]
//4. 버튼을 클릭할때[onclick] overay와 전면에 노출되는 팝업이 render되게 한다
//5. true,false값을 state로 준다
//6. Return문에서 3항 연산자로 true일때는 div가 팝업되게 false일때는 값이없게

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const togglePopup = () => {
    return setShowModal(!showModal);
  };

  console.log(showModal);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      >
      <button style={{
        width: 120,
        height: 120,
        border: "none",
        borderRadius: 50,
        backgroundColor:"hsl(344deg 48% 76%)",
        color: 'white',
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 40,
        cursor:"pointer"
      }} onClick={togglePopup}>Click Me!</button>
      <div
        className={showModal ? "backDisplay" : ""}
      >
        {showModal ? (
          <div className="modalInner">
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1 style={{ color: "white" }}>⭐️ 모두들 고생 하셨습니다 ⭐️ </h1>
            <h2 style={{ color: "white" }}>🎃 되돌아 가고 싶다면 밑에 유령을 눌러주세요 🎃</h2>
            </div>
            <button
              style={{
                display: "inline",
                background: "none",
                color: "white",
                fontSize: 30,
                border: "none",
                fontWeight: "bold",
                marginBottom:30,
                cursor:"pointer"
              }}
              onClick={togglePopup}>
              👻
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
