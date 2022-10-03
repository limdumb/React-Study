import "./togglebtn.css";
import React, {useState} from 'react';


function Togglebtn(){

    const [Alert, setAlert] = useState(false);
    const alertEvent = () =>{ 
        
        if(Alert === false){
            setTimeout(()=>{
                alert("[ 그 코딩실력에 잠이와? TIL은 썼니? ]");
            },1000);
        }
        setAlert(!Alert)
    }

    return(
        <>
        <label className="toggle">
            <input className="toggle_input" type="checkbox" onClick={alertEvent}/>
            <span className="toggle_span"/>
        </label>   
        </>
    )
}



export default Togglebtn;

