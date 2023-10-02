const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogueReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
        state.newMessageText = action.newText;
        break;
        case ADD_NEW_MESSAGE: 
            let newMessage = {
            id: String(state.messagesData.length + 1),
            message: state.newMessageText,
            type: "outcoming",
        };

        state.messagesData.push(newMessage);
        state.newMessageText = "";
        break;
    };

    return state;
};

export const textMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text,});
export const newMessageActionCreator = () => ({type: ADD_NEW_MESSAGE,});
export default dialogueReducer;