import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItems.module.css"

const DialogueItem = (props) => {
    let path = `/dialogues/${props.id}`;
    let imgSrc = props.dialogueAvatar;

    function isActive(item) {
        return (
            item.isActive ? classes['active'] + ' ' + classes['hover-active'] : classes['dialogue-text']
        );
    };

    return (
        <div className={classes["dialogueWrapper"]}>
            <div className={classes["dialogueAvatar"]}>
                <img className={classes["dialogueAvatarImage"]} src={imgSrc} alt="Avatar" />
            </div>
            <div className={classes["dialogue"]}>
                <span><NavLink className={isActive} to={path}>{props.name}</NavLink></span>
            </div>
        </div>
    )
};

export default DialogueItem;