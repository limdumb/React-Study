import React, { useState } from 'react';
import './SwitchToggle.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SwitchDiv = styled.div`
    border: 2px solid pink;
    height: 80px;
    width: 250px;
    border-radius: 50px;
    background-color: pink;
`  ;
const SwitchSpan = styled.span`
    display: flex;
    margin: 3px;
    height: 70px;
    width: 70px;
    border-radius: 50px;
    cursor: pointer;
    background-color: green;
`

export default function SwitchToggle() {
    const [toggle, setToggle] = useState(false)

    const Toggle = (() => {
        if(!toggle) {
            setTimeout(() => {
                alert("스터디 하길 참 잘했다!!")
            },1000)
        }
        setToggle(!toggle)
        
            
    })
    return (
        <>
        <div>
        <SwitchDiv onClick={Toggle}>
        <SwitchSpan style={{transition: "0.5s", transform: toggle ? "translateX(170px)" : "translateX(0)" }}>
        </SwitchSpan>
        </SwitchDiv>
        </div>
        </>
    )
}
