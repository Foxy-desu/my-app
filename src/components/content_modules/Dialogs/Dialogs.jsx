import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogItems";
import MessageItem from "./Messages/MessageItem";

class Dialogs extends React.Component {

    textArea = React.createRef();

    textMessageChange = () => {
        let text = this.textArea.current.value;
        this.props.textChange(text);
    };

    newMessage = () => {
        this.props.newMessage();
    };

    keyDownHandler = (event) => {
        if (event.key === 'Enter' && event.ctrlKey) {
            this.props.newMessage();
        }
    };

    render = () => {

        let dialogsElements = this.props.dialogs.map((dialogItem) => {
            return (
                <DialogItem name={dialogItem.name} id={dialogItem.id} dialogAvatar={dialogItem.dialogAvatar} />
            )
        });

        let messagesElements = this.props.messages.map((messageItem) => {
            return (<MessageItem message={messageItem.message} type={messageItem.type} />)
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
                            <textarea value={this.props.newText} onChange={this.textMessageChange} onKeyDown={this.keyDownHandler} tabIndex={0} ref={this.textArea} className={classes["message-textarea"]}></textarea>
                            <button type="reset" onClick={this.newMessage} className={classes["send-message-button"]}>Send message</button>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
};

export default Dialogs;