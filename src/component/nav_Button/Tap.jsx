import {useState} from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
/*
[목적구분]
1. 3개의 탭버튼을 구현한다.
2. 클릭된 해당탭만 활성화되어 내용보여주기
   (탭의 내용은 중복금지)

[탭별요구사항]

step1 : 과제로 진행했던 Rating에 대한 기능설명이 나오도록 구현!
step2 : 버튼클릭시에 새로운 모델 컴포넌트 창이 떠야하며 해당창은 반응형이여야한다.(중앙배치요망)
step3 : Switch 와 동일하게 기능설명을 하고 Switch를 클릭시 alert 창에 스터디 1기 끝난후기
 
*/



function Tap(){
    const [hide, setHide] = useState(0);

    return(
        
        <div id="tap">
            <ul className="tap_title">
                <li className="title_dot_li">
                    <span onClick={()=>{setHide(1)}}>Rating 탭</span>
                </li>
                <li className="title_dot_li">
                    <span onClick={()=>{setHide(2)}}>pop-up 탭</span>
                </li>
                <li className="title_dot_li">
                    <span onClick={()=>{setHide(3)}}>toggle 탭</span>
                </li>
            </ul>
            <div className="tap_content">
                <div hidden={hide !== 0}>
                    <span>탭 메뉴를 클릭하세요!</span>
                </div>

                <div hidden={hide !== 1}>
                    <Step1/>
                </div>

                <div hidden={hide !== 2}>
                    <Step2/>
                </div>

                <div hidden={hide !== 3}>
                    <Step3/>
                </div>
            </div>
        </div>
        

    )
}


export default Tap;