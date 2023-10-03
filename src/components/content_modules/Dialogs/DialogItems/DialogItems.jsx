import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItems.module.css"

const DialogItem = (props) => {
    let path = `/dialogues/${props.id}`;
    let imgSrc = props.dialogAvatar;

    function isActive(item) {
        return (
            item.isActive ? classes['active'] + ' ' + classes['hover-active'] : classes['dialog-text']
        );
    };

    return (
        <div className={classes["dialogWrapper"]}>
            <div className={classes["dialogAvatar"]}>
                <img className={classes["dialogAvatarImage"]} src={imgSrc} alt="Avatar" />
            </div>
            <div className={classes["dialog"]}>
                <span><NavLink className={isActive} to={path}>{props.name}</NavLink></span>
            </div>
        </div>
    )
};

export default DialogItem;