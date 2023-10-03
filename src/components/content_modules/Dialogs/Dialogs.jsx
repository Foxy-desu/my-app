import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogItems";
import MessageItem from "./Messages/MessageItem";

const Dialogs = (props) => {

    let textArea = React.createRef();

    let textMessageChange = () => {
            let text = textArea.current.value;
            props.textChange(text);
    };

    let newMessage = ()=> {
        props.newMessage();
    };

    let keyDownHandler = (event)=> {
        if (event.key === 'Enter' && event.ctrlKey) {
            props.newMessage();
        }
    };

    let dialogsElements = props.dialogs.map((dialogItem) => {
        return (
            <DialogItem name={dialogItem.name} id={dialogItem.id} dialogAvatar={dialogItem.dialogAvatar} />
        )
    });

    let messagesElements = props.messages.map((messageItem) => {
        return (<MessageItem message={messageItem.message} type={messageItem.type}/>)
    });

    return (
        <div className={classes["dialogs"]}>
            <div className={classes["dialogs-items"]}>
                {dialogsElements}
            </div>
            <div className={classes["messages"]}>
                <div className={classes["communication-display"]}>
                    {messagesElements}
                </div>
                <div className={classes["create-message-panel"]}>
                    <form className={classes["form"]}>
                        <textarea value={props.newText} onChange={textMessageChange} onKeyDown={keyDownHandler} tabIndex={0} ref={textArea} className={classes["message-textarea"]}></textarea>
                        <button type="reset" onClick={newMessage} className={classes["send-message-button"]}>Send message</button>
                    </form>
                </div>
            </div>
        </div>


    )
};

export default Dialogs;