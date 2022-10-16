import {useState} from "react"

function Step2(){
    const [newpage, SetNewPage] = useState(false)
    console.log("newpage:",newpage)

    return(
        <div className="step2">
            <button onClick={()=> SetNewPage(!newpage)}>클릭!</button>
            <div className="step2_dot_new" style={{display : newpage ? "block":"none"}}>
            </div>
        </div>
    )
}

export default Step2