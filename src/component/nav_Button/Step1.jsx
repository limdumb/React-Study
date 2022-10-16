import React from "react";
import NewRating from "./NewRating"
import styled from "styled-components";

const Tapimg =styled.img`
    width: 100%;
    height: 100%;
    display: block;
`

function Step1(){

    return(
        <div className="step1">
            <h1>제목</h1>
            <NewRating/>
            <Tapimg src={`${process.env.PUBLIC_URL}/photo/test1.jpg`} alt="imgs"/>
            <p>Rating내용</p>
            <ul className="step1_dot_btns">
                <li>⬅️왼쪽</li>
                <li>오른쪽➡️</li>
            </ul>
        </div>
    )
}

export default Step1;