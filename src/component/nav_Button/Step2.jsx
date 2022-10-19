import {useState} from "react"

function Step2(){
    const [newpage, SetNewPage] = useState(false)
    

    return(
        <div className="step2">
            <button onClick={()=> SetNewPage(!newpage)} style={{fontSize : "50px"}}>클릭!</button>
            <div className="step2_dot_new" style={{display : newpage ? "block":"none"}}>
                <button onClick={()=> SetNewPage(false) }>X</button>
                <p>팝업창</p>
                <p>“얄리 얄리 얄라셩 얄라리 얄라”</p>
            </div>
        </div>
    )
}

export default Step2