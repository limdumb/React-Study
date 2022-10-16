import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
    height: 180px;
    width: 180px;
    margin: 50px;
    border-radius: 200px;
    font-size: 20px;
    :hover {background-color:skyblue;}
    `;

export default function Buttons() {
    return (
    <>  
        <StyledButton onClick={(() => {
            console.log('그코잠 만세')
        })}>콘솔 로그</StyledButton>
     <StyledButton className="button1" onClick={((e)=>{
        e.target.disabled = true;
    })}
    >비활성화</StyledButton>
    <Link to="/toggle"><StyledButton>스위치</StyledButton></Link>
    <Link to="/rating"><StyledButton>레이팅</StyledButton></Link>
    <Link to="/tab"><StyledButton>탭</StyledButton></Link>
    </>
    );
}
