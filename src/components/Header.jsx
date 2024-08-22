import React from "react"
import headerlogo from "/images/Big.ico"
import headerrules from "/images/rules_logo.svg"
import headerdis from "/images/discord_logo.svg"
import headertelega from "/images/telegram_logo.svg"


function Header () {
    
    const handleDeleteHero = () => {
        localStorage.clear();
        window.location.reload();
    };



    return (
        <div className="header">
        <div className="header__logo">
            <img className="logo__img" src={headerlogo} alt="logo" />
            <span>DnD Hero Builder</span>
        </div>
        <ul className="header__nav" >
            <li className="nav__item">
                <a href="https://docs.google.com/document/d/1CX__erSHTnpZPtOHyb8_BYANVMTw_Wip/edit?usp=sharing&ouid=107100755643456077381&rtpof=true&sd=true">
                    <img src={headerrules} alt="rules" /> 
                    <span>ПРАВИЛА</span>
                </a>
            </li>
            <li className="nav__item">
                <a href="https://discord.gg/afsS49GSQw">
                    <img src={headerdis} alt="discord" />
                    <span>ДИСКОРД</span>
                </a>
            </li >
            <li className ="nav__item">
                <a href="#">
                    <img src={headertelega} alt="telega" />
                    <span>ТЕЛЕГРАМ</span>
                </a>
            </li>
            <li className ="nav__item">
                <a href="#" onClick={handleDeleteHero}>
                    <span>Удалить героя</span>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Header