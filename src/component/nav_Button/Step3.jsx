import React from "react"
import styled from "styled-components"

const Toggle = styled.div`
    background-color: red;
    border-radius: 50%;
    width : 50px;
    height : 50px;
    transform: translateY(-12.5px);
`
const Togglebody = styled.div`
    background-color: blue;
    width : 400px;
    height : 25px;
    border-radius: 20px;
`

function Step3(){

    return(
        <div>
            <h1>Toggle 버튼!</h1>
            <Togglebody><Toggle/></Togglebody>
            <p>내용설명</p>
        </div>
    )
}

export default Step3