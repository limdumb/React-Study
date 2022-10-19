import { useEffect } from "react";
import {useState} from "react"
import styled from "styled-components"

const Toggle = styled.div`
    background-color: red;
    border-radius: 50%;
    width : 50px;
    height : 50px;
`
const Togglebody = styled.div`
    background-color: blue;
    width : 400px;
    height : 25px;
    border-radius: 20px;
    
`

function Step3(){
    const [click, setClick] = useState(false);

    useEffect(()=>{
        if(click === true){
            setTimeout(()=>{
                alert("모두정말고생많으셨습니다 그코잠에 들어오게된후 리액트에대해서 더많이 알게되었습니다. 앞으로도 많이부족하지만 잘부탁드립니다!");
            },1000);
        }
    },[click]);

    return(
        <div>
            <h1>Toggle 버튼!</h1>
            <Togglebody>
                <Toggle onClick={()=> setClick(!click)}
                    className={click ? "event2" : "event1"}
                    />
            </Togglebody>
            <p>클릭에따라 css속성이아닌 클래스이름을 추가하여 구현한 Toggle 버튼</p>
        </div>
    )
}

export default Step3