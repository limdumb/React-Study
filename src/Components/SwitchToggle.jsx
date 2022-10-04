import React from 'react';
import './SwitchToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function SwitchToggle() {
    return (
        <>
        <FontAwesomeIcon icon={faHouse} size="5x"/>
        <h1>제껴보세요</h1>
        <label className="switch">
            <input type="checkbox" onClick={TogleAlert}></input>
            <span className="slider round"></span>
        </label>
        </>     
    )
}

//함수 선언식으로 호이스팅 적용
function TogleAlert() {
    setTimeout(() => {
        alert('그 코딩실력에 잠이와? TIL은 썼니?')
    }, 3000);
}