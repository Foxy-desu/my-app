const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogsData: [
        { id: "1", name: "Sasha", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLn3tuyxUh6B93ao0WlTikMvolJ_LdgvTXrA&usqp=CAU", },
        { id: "2", name: "Lena", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWpPgSKoorMF_5Xe7QnJe7EhFRUf857kXXcIc7LOAZkJxA4ZE848CyNt2zswn5EG7sKY&usqp=CAU", },
        { id: "3", name: "Ira", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWEBmUisHzLOFBpKx4jKdWU3L66drj1LPh_xhRdnwcY-Bv_B6DYtxwdObZjPgs5wUJUQ&usqp=CAU", },
        { id: "4", name: "Kolya", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbnXuiUqF3_Aunxq4uuR5HdyX33xONJy0LA&usqp=CAU", },
        { id: "5", name: "Tegu", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHqTyz6jeKeJr9RtEZUQcFZE_CGDEJjJA0g&usqp=CAU", },
        { id: "6", name: "Desu", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgLUjfE8T9tWz367n-hdqHdQZFUSvhwhfIJ_t3Td9Bziee-FoWxr8WkJ0PjJuMEqkTsQ&usqp=CAU", },
        { id: "7", name: "Tits", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ1h_9TFQwCtEAYDKVDYMTphY4qXjZTfhTA&usqp=CAU", },
        { id: "8", name: "Loli", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKasZVc_FE8pstS7FWvwzWps-B08v2wcIbA&usqp=CAU", },
        { id: "9", name: "Kawai_Girl", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUD8Eq5c6NC35JYqygTiymQOEj1Uuo2-Zlog&usqp=CAU", },
        { id: "10", name: "Neeko", dialogAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkjxIxq0NxGPck5iudNCObHkFMPo6QDu24HHOiJZLKCgjQ1g0e7HW5qVv2fwmPJl1kFY&usqp=CAU", },
    ],

    messagesData: [
        { id: "1", message: "Hi! It is so nice to talk to you", type: "incoming", },
        { id: "2", message: "How have u been", type: "incoming", },
        { id: "3", message: "Desu desu desu", type: "outcoming", },
        { id: "4", message: "Long time no see", type: "outcoming", },
        { id: "5", message: "^_^", type: "incoming", },
    ],
    newMessageText: "",


};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText,
            };

        case ADD_NEW_MESSAGE: {
            let newMessage = {
                id: String(state.messagesData.length + 1),
                message: state.newMessageText,
                type: "outcoming",
            };

            if (state.newMessageText) {
                return {
                    ...state,
                    messagesData: [...state.messagesData, newMessage],
                    newMessageText: "",
                };
            }
        };
        default:
            return state;
    };
};

export const textChange = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text, });
export const newMessage = () => ({ type: ADD_NEW_MESSAGE, });
export default dialogReducer;