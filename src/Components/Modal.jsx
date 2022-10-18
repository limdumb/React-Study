import { useState } from "react";
import "./Modal.css"

//total: TAB2버튼을 눌렀을 때 새로운 팝업창을 나타낸다.
//detail 1. 팝업창의 틀을 구현한다.
// 틀을 구현하기 위해선 className을 각각 지정해주어 레이아웃을 설정한다.
// css 변경 요소가 복잡하고 다양하기 때문에 Styled Components 보다는 style.css를 활용한다.
//detail 2. TAB2버튼을 클릭을 했을 때와 안했을 때 CSS 변경 지점이니 useState를 활용한다.
//useState를 true/false로 나누어 값에 따라 백그라운드가 'none'이 된다.


const Modal = () => {
    const [pop, setPop] = useState(false);
    const pushPop = () => {
        return setPop(!pop)
    }
    return (
        <div>
        {pop ? (
        <body className={pop ? "pop_body" : ""}>
            <div className={pop ? "pop_container" : ""}>
                <div className={pop ? "backOn" : ""}><button style={{
                    height: "80px",
                    width: "80px"
                }}onClick={pushPop}>Close</button>
                </div>
                
            </div>
        </body>) : null}
        <button style={{
            height: "80px",
            width: "80px"
        }}className={pop ? "pop_btn" : ""} onClick={pushPop}>Click</button>
        </div>
    )
}

export default Modal;