import React from "react";
import classes from "./MessageItem.module.css";

class MessageItem extends React.Component {

    render =()=> {
       let message = this.props.message;
        let messageType = this.props.type;

        return (
            <div className={classes["message"]} type={messageType}>{message}</div>
        );
    };
}

export default MessageItem;