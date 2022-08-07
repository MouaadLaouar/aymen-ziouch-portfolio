import "../scss/NavBar.scss"
import { useState } from "react";

//icons
import Menu from "../components/icons/Menu";
import Close from "../components/icons/Close";
import Sun from "../components/icons/Sun";



const NavBar = () => {

    const [menu, setmenu] = useState(true)
    const [mode, setmode] = useState(true)
    const [menulist, setmenulist] = useState("menu-list")

    return (
        <header>
            <div className="menu-button" onClick={() => {
                if(menu === true) {
                    setmenu(false);
                    setmenulist("active")
                } else {
                    setmenu(true)
                    setmenulist("menu-list")
                }
            }}>
                {menu === true ? <Menu /> : <Close /> }
            </div>

            <div className="mode" onClick={() => {
                if(mode === true) {
                    setmode(false)
                } else {
                    setmode(true)
                }
            }}>
                {mode ? <Sun /> : <h1>??</h1>}
            </div>

            <div className={ menulist }>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">PROJECT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar