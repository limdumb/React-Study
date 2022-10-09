import styled from "styled-components";
import { useState } from "react";


function Toggle(){
    const [Left , setLeft] = useState(false);
    
    const to = ()=>{
      setLeft(!Left)
    }  

    return(
        <>
            <Styledlabel>
                <Styledinput type="checkbox" onChange={to}></Styledinput>
                <Styledspan style={{transform: Left ? "translateX(340px)" : "translateX(0)" }}></Styledspan>
            </Styledlabel>
        </>
    )
}

const Styledlabel = styled.label`
    position: relative;
    background-color: darkblue;
    width : 400px;
    height : 50px;
    border-radius: 50px;
    
`
const Styledinput = styled.input`
    width : 0px;
    height : 0px;
    margin : 0px;
`

const Styledspan = styled.span`
    position: absolute;
    width : 40px;
    height : 40px;
    background-color: darkorange;
    border-radius : 50px;
    left : 10px;
    top : 5px;
    transition: 1s;
    
`

export default Toggle;