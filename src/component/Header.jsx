import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
            <div className="Header ibx">
                <h1>React Study</h1>
                <nav className="GNB">
                    <ul className="GNB_dot_ul">
                        <li><Link to="/">Home</Link></li>
                        <li className="GNB_dot_li">
                            <span>과제</span>
                            <div className="GNB_sub">
                                <ol className="GNB_sub_ol">
                                    <li><Link to="Log/">Log</Link></li>
                                    <li><Link to="Toggle/">Toggle</Link></li>
                                    <li><Link to="OnOff/">OnOff</Link></li>
                                    <li><Link to="Rating/">Rating</Link></li>
                                </ol>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}

export default Header;