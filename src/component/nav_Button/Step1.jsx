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
            <Tapimg src={`${process.env.PUBLIC_URL}/photo/test2.png`} alt="imgs"/>
            <p>해당원을 클릭했을시에 각원이 가진 value에 값을 useState에 저장하여
                 그 값을 만들어진 Array의 값과 비교하여 해당value 값까지 색상을채운다!</p>
        </div>
    )
}

export default Step1;