import React from "react";
import "./App.css";
import Header from "./component/Header"
import Main from "./component/Main"
import Footer from "./component/Footer"
import { BrowserRouter, Routes } from "react-router-dom";






function App(){
    return(
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
            <Routes>
                {/* <Route path="*" element={<Main/>}/> */}
                {/* 임시보류 */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;