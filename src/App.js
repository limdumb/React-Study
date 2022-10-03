//eslint-disable // 좋지않은문법오류를 나타내지않음
//1. Route를 이용하여 버튼클릭시 페이지이동 (완료)
//2. 버튼클릭시에 ToggleSwitch가 있는 페이지로 이동 (완료)
//3. ToggleSwitch은 클릭시 on/off로 구현!! (완료)
//4. ToggleSwitch가 on상태일때 3초뒤 Alert내용 : [ 그 코딩실력에 잠이와? TIL은 썼니? ] (완료)
//   , 클릭시 on/off 색상다르게 및 글씨 보이도록! (완료)

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home.js"
import Main from "./Main.js"





function App() {
 return(
     <BrowserRouter>
        <div className='App'>
            <Link to="/Home"><button>홈으로가기</button></Link>
            <Link to="/Main"><button>css버튼보러가기</button></Link>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Main" element={<Main/>}/>

            </Routes>
        </div>
    </BrowserRouter>
    
 )
}


export default App;
