import {useState} from "react"

function Step2(){
    const [newpage, SetNewPage] = useState(false)
    // console.log("newpage:",newpage)

    return(
        <div className="step2">
            <button onClick={()=> SetNewPage(!newpage)} style={{fontSize : "50px"}}>클릭!</button>
            <div className="step2_dot_new" style={{display : newpage ? "block":"none"}}>
                <button onClick={()=> SetNewPage(false) }>X</button>
                <p>테스트용</p>
            </div>
        </div>
    )
}

export default Step2