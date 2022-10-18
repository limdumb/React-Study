import { useState } from "react";
import "../css/switch.css";
export default function Switch() {
  // return (
  //   <div>
  //     <button>라우터다!!!</button>
  //   </div>
  // );
  return (
    <div className="App">
      <DarkMode />
    </div>
  );
}

function DarkMode() {
  // 👇 다크 모드 On/Off를 상태로 관리!
  const [isDarkModeOn, setDarkMode] = useState(false);
  return (
    <div className={isDarkModeOn ? "Container dark" : "Container light"}>
      <div className={isDarkModeOn ? "dark" : "light"}>
        나도 맥북 갖고싶다!!
      </div>
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => {
            setTimeout(() => {
              alert(
                "이번 1달간 컴포넌트 구현 스터디로 인하여 많이 성장한 것 같습니다. 많은 도움을 받게되어 감사하고 이제 새로운 프로젝트 시작함에 있어서도 더 화이팅해서 좋은 결과물을 만들어봐요!"
              );
            }, 3000);

            setDarkMode(isDarkModeOn ? false : true);
          }}
        />
        <span className="slider circle"></span>
      </label>
    </div>
  );
}
