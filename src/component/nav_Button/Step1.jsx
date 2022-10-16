import React from "react";
import styled from "styled-components";

const Tapimg =styled.img`
    width: 250px;
    height: 250px;
`

function Step1(){

    return(
        <div>
            <h1>제목</h1>
            <Tapimg src={`${process.env.PUBLIC_URL}/photo/test1.jpg`} alt="imgs"/>
            <p>Rating내용</p>
        </div>
    )
}

export default Step1;