import styled from "styled-components";
import { useState } from "react";

function Log(){
    const [text, setText] = useState("꺼짐");
    const [select, setSelect] = useState(false);

    const EventClick = ()=>{
        if(select === false){
        setSelect(!select);
        setText("켜짐");
        console.log("그코잠화이팅!");
        } else{
            setSelect(!select);
            setText("꺼짐");
            
        }  
}
    return(
        <>
            <div>
                 <Styledbutton onClick={EventClick} style={{background: select ? "blue" : "gray"}}>{text}</Styledbutton>
            </div>
        </>
    )
}

const Styledbutton = styled.button`
    background-color: darkblue;
    color: white;
    border-radius:50px;
    width:100px;
    height:100px;
    font-size:20px;
    font-weight:bold;
`;

export default Log;
