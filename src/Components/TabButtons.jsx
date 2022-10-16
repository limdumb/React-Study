import FullStars from "https://cdn-icons-png.flaticon.com/512/1012/1012350.png"
import EmptyStars from "https://cdn-icons-png.flaticon.com/512/1012/1012299.png"
import styled from "styled-components"
// 1. Tab 버튼을 3개를 생성한다. V
// 2. Tab1 Onclick시 Rating 기능과 기능에 대한 설명이 밑에 나타나도록 구현
// 3. Tab2 Onclick시 Modal Component가 나오게끔 구현한다. (컴포넌트 분리해야함)
// 4. Tab3 Onclick시 Switch Component 구현 (Alert 내용은 스터디 1기가 끝난 소감)

const FullImg = styled.img`
    width: 100px;
    height: 100px;
`

const EmptyImg = styled.img`
    width: 100px;
    height: 100px;
`

const TabButtons = () => {
    return (
    <div>
        <button>TAB1</button>
        <button>TAB2</button>
        <button>TAB3</button>
    </div>
    )
}
// 2. Tab1 Onclick시 Rating 기능과 기능에 대한 설명이 밑에 나타나도록 구현


export default TabButtons;