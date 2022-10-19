import { useState } from "react";
import classNames from "classnames";

/*
1. 기본적인 toggle형태의 모습을갖는다
2. Click시 toggle버튼의 원형이 움직인다
3. Click시 toggle버튼의 on/off의 기능이담겨야한다 그에따라 alert로 구분
4. on/off에 따라 색상및 글자변경!
*/


function Onoff(){
    const [Event, setEvent] = useState(false);
    

    const CK = ()=>{

        if(Event === false){
            setTimeout(()=>{
                alert("[ 그 코딩실력에 잠이와? TIL은 썼니? ]");
            },1600);
        }
        setEvent(!Event);

    }
    return(
        <>
           <div className="OnOff_div" style={{backgroundColor : Event ? "#00649d":'#7c7673'}}>
                <span className={classNames("OnOff_span", {"stap1" : Event})} onClick={CK}><p>{Event ? "ON" : "Off"}</p></span>
           </div>
        </>
    )
}
export default Onoff;