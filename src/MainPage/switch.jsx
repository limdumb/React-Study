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
      <div className={isDarkModeOn ? "dark" : "light"}>다크다크다크!</div>
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => {
            setDarkMode(isDarkModeOn ? false : true);
          }}
        />
        <span className="slider circle"></span>
      </label>
    </div>
  );
}
