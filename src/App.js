import React from "react";
import "./App.css";
import Header from "./component/Header"
import Main from "./component/Main"
import Footer from "./component/Footer"


function Add(){
    return(
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Add;