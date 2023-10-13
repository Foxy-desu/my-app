import {newMessageActionCreator, textMessageChangeActionCreator} from "../../../redux/dialogReducer"
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogsData,
        messages: state.dialogPage.messagesData,
        newText: state.dialogPage.newMessageText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        textChange: (text)=> {
            dispatch(textMessageChangeActionCreator(text))
        },

        newMessage: ()=> {
            dispatch(newMessageActionCreator())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;