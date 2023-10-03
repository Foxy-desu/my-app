import React from "react";
import {newMessageActionCreator, textMessageChangeActionCreator} from "../../../redux/dialogReducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let textMessageChange = (text) => {
            let action = textMessageChangeActionCreator(text);
            props.dispatch(action);
    };

    let newMessage = ()=> {
        let action = newMessageActionCreator();
        props.dispatch(action);
    };

    let dialogsArray = props.state.dialogPage.dialogsData;

    let messagesArray = props.state.dialogPage.messagesData;

    let newMessageText = props.state.dialogPage.newMessageText;

    return (
        <Dialogs textChange={textMessageChange} 
                   newMessage={newMessage} 
                   dialogs={dialogsArray}
                   messages={messagesArray}
                   newText={newMessageText}/>
    )
};

export default DialogsContainer;