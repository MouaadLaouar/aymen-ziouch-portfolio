import "../scss/NavBar.scss"
import logo from "../assets/code-white.png"
import menuBtn from "../assets/menu.png"
import close from "../assets/close.png"
import { useState } from "react"


const NavBar = () => {

    const [menu, setmneu] = useState('menu-list')
    const [update, setupdate] = useState(menuBtn)

    return (
        <header>
            <div className="menu-button" onClick={ () => {
                if(menu === "menu-list") {
                    setmneu("active")
                    setupdate(close)
                } else {
                    setmneu("menu-list")
                    setupdate(menuBtn)
                }
            }}>
                <img src={ update } alt="menu-button" />
            </div>
            
            <div className="logo">
                <img src={ logo } alt="logo" />
            </div>

            <div className={ menu }>
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