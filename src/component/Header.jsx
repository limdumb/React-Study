
function Header(){
    return(
        <div className="Header ibx">
            <h1>React Study</h1>
            <nav className="GNB">
                <ul className="GNB_dot_ul">
                    <li>Home</li>
                    <li>
                        <span>과제</span>
                        <div className="GNB_sub">
                            <ol className="GNB_sub_ol">
                                <li>버튼과제</li>
                            </ol>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;