import RatingStar from "./RatingStar";
import Modal from "./Modal";
import SwitchToggle from "./SwitchToggle";
import styled from "styled-components";
import { useState } from "react";
// 1. Tab 버튼을 3개를 생성한다. V
// 2. Tab1 Onclick시 Rating 기능과 기능에 대한 설명이 밑에 나타나도록 구현
// 3. Tab2 Onclick시 Modal Component가 나오게끔 구현한다. (컴포넌트 분리해야함)
// 4. Tab3 Onclick시 Switch Component 구현 (Alert 내용은 스터디 1기가 끝난 소감)

const TabStyled = styled.button`
    height: 80px;
    width: 160px;
    border-radius: 30px;
`

const TabButtons = () => {
    const [tab, setTab] = useState(0);

    const TabHandler = (index) => {
        setTab(index)
    }
    const tabContents = [{
        title: <TabStyled onClick={() => TabHandler(0)}>Rating</TabStyled>,
        content: <RatingStar/>
    },

        {
        title: <TabStyled onClick={() => TabHandler(1)}>Modal</TabStyled>,
        content: <Modal />
    },
        {
        title: <TabStyled onClick={() => TabHandler(2)}>Switch</TabStyled>,
        content: <SwitchToggle />
    }]
    return (
    <div style={{
        border: "2px solid red",
        height: "100vh",
        width: "60vw"}}>
        <nav style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
        {tabContents.map((el) => {
            return el.title;
        })}
        </nav>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid blue",
                height: "80vh"
            }} >
                {tabContents[tab].content}
            </div>
    </div>
    )
}
// 2. Tab1 Onclick시 Rating 기능과 기능에 대한 설명이 밑에 나타나도록 구현


export default TabButtons;