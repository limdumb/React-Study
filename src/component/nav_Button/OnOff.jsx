import styled from "styled-components";
/*
1. 기본적인 toggle형태의 모습을갖는다
2. Click시 toggle버튼의 원형이 움직인다
3. Click시 toggle버튼의 on/off의 기능이담겨야한다 그에따라 alert로 구분
4. on/off에 따라 색상및 글자변경!
*/


function Onoff(){
    return(
        <>
           <Styleddiv>
                <Styledspan></Styledspan>
           </Styleddiv>
        </>
    )
}

const Styleddiv = styled.div`
    position: relative;
    background-color : black;
    border : 1px solid blue;
    width : 90%;
    height : 50px;
    border-radius: 50px;
`
const Styledspan = styled.span`
    position: absolute;
    display : block;
    background-color : red;
    border : 1px solid blue;
    width : 50px;
    height : 50px;
    border-radius: 50px;
    
`

export default Onoff;