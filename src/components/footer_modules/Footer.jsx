import React from "react";
import footerClasses from "./Footer.module.css";

class Footer extends React.Component {
    render = () => {
        return (
            <footer className={footerClasses["app-footer"]}>
            </footer>
        );
    }
};

export default Footer;