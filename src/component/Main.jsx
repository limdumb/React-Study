import { Route, Routes } from "react-router-dom";
import Log from "./nav_Button/Log";
import Toggle from "./nav_Button/Toggle";
import OnOff from "./nav_Button/OnOff";
import Rating from "./nav_Button/Rating";


function Main(){
    return(
        <>
        <div className="Main ibx">
            {/* <h1>홈</h1> */}
            <Routes>
                {/* <Route path="/" element={<Main/>}/> */}
                <Route path="Log/" element={<Log/>}/>
                <Route path="Toggle/" element={<Toggle/>}/>
                <Route path="OnOff/" element={<OnOff/>}/>
                <Route path="Rating/" element={<Rating/>}/>
            </Routes>
        </div>
        </>
    )
}

export default Main;