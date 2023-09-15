import React from "react";
import headerClasses from "./Header.module.css";


const Header = ()=> {
    return (
        <header className={headerClasses["app-header"]}>
            <img className={headerClasses["app-header__logo-image"]} width={60} height={60} src='https://www.svgrepo.com/show/452950/cat-curled.svg'></img>
        </header>
    )
}

export default Header;