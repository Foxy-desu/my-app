import React from "react";
import classes from "./styles/preloader.module.css"
import preloader from "../../assets/preloader/764.svg";

const Preloader = (props) => {
    return (
    <div className={classes["preloader"]}>
        <img className={classes["preloader-item"]} src={preloader}></img>
    </div>
    );
};

export default Preloader;