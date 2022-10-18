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

    return(
        <div>
            <h1>Toggle 버튼!</h1>
            <Togglebody>
                <Toggle onClick={()=> setClick(!click)}
                    className={click ? "event1" : "event2"}/>
            </Togglebody>
            <p>클릭에따라 css속성이아닌 클래이름 추가로 구현한 Toggle 버튼</p>
        </div>
    )
}

export default Step3