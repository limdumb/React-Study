import { useState } from "react";
import { Link } from "react-router-dom";

export default function Buttons() {
    return (
    <>  
    <div>
        <div>
        <button onClick={(() => {
            console.log('그코잠 만세')
        })}>콘솔 로그</button>
    </div>
    <button className="button1" onClick={((e)=>{
        e.target.disabled = true;
    })}
    >비활성화</button>
    <Link to="/toggle"><button>라우터</button></Link>
    </div>
    </>
    );
}
