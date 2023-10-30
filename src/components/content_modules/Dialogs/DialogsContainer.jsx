import {textChange, newMessage} from "../../../redux/dialogReducer"
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogsData,
        messages: state.dialogPage.messagesData,
        newText: state.dialogPage.newMessageText,
    }
};

const DialogsContainer = connect(mapStateToProps, {textChange, newMessage})(Dialogs);

export default DialogsContainer;