import { useState } from "react";

export default function Home() {
    return (
    <>  
    <div>
        <div>
        <button onClick={(() => {
            console.log('그코잠 만세')
        })}></button>
        <h1>My First react</h1>
    </div>
    <span>
    <button className="button1" onClick={((e)=>{
        e.target.disabled = true;
    })}
       ></button>
    </span>
    </div>
    </>
    );
}
