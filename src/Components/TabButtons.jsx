import RatingStar from "./RatingStar";
import styled from "styled-components";
// 1. Tab 버튼을 3개를 생성한다. V
// 2. Tab1 Onclick시 Rating 기능과 기능에 대한 설명이 밑에 나타나도록 구현
// 3. Tab2 Onclick시 Modal Component가 나오게끔 구현한다. (컴포넌트 분리해야함)
// 4. Tab3 Onclick시 Switch Component 구현 (Alert 내용은 스터디 1기가 끝난 소감)

const Tab = styled.button`
    width: 100%;
    height: 10em;
`

const TabButtons = () => {
    return (
    <div style={{
        border: "2px solid red",
        height: "100vh",
        width: "60vw"}}>
        <nav style={{
            display: "flex",
            flexDirection: "row",
        }}>
        <Tab>TAB1</Tab>
        <Tab>TAB2</Tab>
        <Tab>TAB3</Tab>
        </nav>
            <div style={{
                border: "2px solid blue",
                height: "80vh"
            }}>
            <RatingStar />
            </div>
    </div>
    )
}
// 2. Tab1 Onclick시 Rating 기능과 기능에 대한 설명이 밑에 나타나도록 구현


export default TabButtons;