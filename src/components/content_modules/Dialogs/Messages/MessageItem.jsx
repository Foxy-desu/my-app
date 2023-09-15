import React from "react";
import classes from "./MessageItem.module.css";

const MessageItem = (props) => {
    let message = props.message;
    let messageType = props.type;

    return (
        <div className={classes["message"]} type={messageType}>{message}</div>
    );
};

export default MessageItem;