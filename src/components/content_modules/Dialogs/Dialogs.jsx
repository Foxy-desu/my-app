import React from "react";
import classes from "./Dialogues.module.css";
import DialogueItem from "./DialogItems/DialogItems";
import MessageItem from "./Messages/MessageItem";


const Dialogues = (props) => {

    let textArea = React.createRef();

    let textMessageChange = () => {
        try {
            let text = textArea.current.value;
            props.updateNewMessageText(text);
        } catch(error) {console.error(error)};

    };

    let newMessage = ()=> {
        props.createNewMessage();
    };

    let keyDownHandler = (event)=> {
        if (event.key === 'Enter' && event.ctrlKey) {
            newMessage();
        }
    };


    let dialoguesElements = props.appState.dialoguesData.map((dialogueItem) => {
        return (
            <DialogueItem name={dialogueItem.name} id={dialogueItem.id} dialogueAvatar={dialogueItem.dialogueAvatar} />
        )
    });

    let messagesElements = props.appState.messagesData.map((messageItem) => {
        return (<MessageItem message={messageItem.message} type={messageItem.type}/>)
    });

    return (
        <div className={classes["dialogues"]}>
            <div className={classes["dialogues-items"]}>
                {dialoguesElements}
            </div>
            <div className={classes["messages"]}>
                <div className={classes["communication-display"]}>
                    {messagesElements}
                </div>
                <div className={classes["create-message-panel"]}>
                    <form className={classes["form"]}>
                        <textarea value={props.newMessageText} onChange={textMessageChange} onKeyDown={keyDownHandler} tabIndex={0} ref={textArea} className={classes["message-textarea"]}></textarea>
                        <button type="reset" onClick={newMessage} className={classes["send-message-button"]}>Send message</button>
                    </form>
                </div>
            </div>
        </div>


    )
};

export default Dialogues;