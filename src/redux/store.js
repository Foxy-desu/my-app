import navigationReducer from "./navigationReducer";
import profileReducer from "./profileReducer";
import dialogueReducer from "./dialogReducer";

let store = {
    _state: {

        profilePage: {
            postData: [
                { id: "1", message: "Hello! This is my first post :)", likes: "35", comments: "8", },

            ],
            newPostText: "",
        },
        dialoguePage: {

            dialoguesData: [
                { id: "1", name: "Sasha", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLn3tuyxUh6B93ao0WlTikMvolJ_LdgvTXrA&usqp=CAU", },
                { id: "2", name: "Lena", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWpPgSKoorMF_5Xe7QnJe7EhFRUf857kXXcIc7LOAZkJxA4ZE848CyNt2zswn5EG7sKY&usqp=CAU", },
                { id: "3", name: "Ira", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWEBmUisHzLOFBpKx4jKdWU3L66drj1LPh_xhRdnwcY-Bv_B6DYtxwdObZjPgs5wUJUQ&usqp=CAU", },
                { id: "4", name: "Kolya", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbnXuiUqF3_Aunxq4uuR5HdyX33xONJy0LA&usqp=CAU", },
                { id: "5", name: "Tegu", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHqTyz6jeKeJr9RtEZUQcFZE_CGDEJjJA0g&usqp=CAU", },
                { id: "6", name: "Desu", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgLUjfE8T9tWz367n-hdqHdQZFUSvhwhfIJ_t3Td9Bziee-FoWxr8WkJ0PjJuMEqkTsQ&usqp=CAU", },
                { id: "7", name: "Tits", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ1h_9TFQwCtEAYDKVDYMTphY4qXjZTfhTA&usqp=CAU", },
                { id: "8", name: "Loli", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKasZVc_FE8pstS7FWvwzWps-B08v2wcIbA&usqp=CAU", },
                { id: "9", name: "Kawai_Girl", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUD8Eq5c6NC35JYqygTiymQOEj1Uuo2-Zlog&usqp=CAU", },
                { id: "10", name: "Neeko", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkjxIxq0NxGPck5iudNCObHkFMPo6QDu24HHOiJZLKCgjQ1g0e7HW5qVv2fwmPJl1kFY&usqp=CAU", },
            ],

            messagesData: [
                { id: "1", message: "Hi! It is so nice to talk to you", type: "incoming", },
                { id: "2", message: "How have u been", type: "incoming", },
                { id: "3", message: "Desu desu desu", type: "outcoming", },
                { id: "4", message: "Long time no see", type: "outcoming", },
                { id: "5", message: "^_^", type: "incoming", },
            ],
            newMessageText: "",


        },
        navigationBar: {
            friendsList: [
                { id: "2", name: "Lena", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWpPgSKoorMF_5Xe7QnJe7EhFRUf857kXXcIc7LOAZkJxA4ZE848CyNt2zswn5EG7sKY&usqp=CAU", },
                { id: "4", name: "Kolya", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbnXuiUqF3_Aunxq4uuR5HdyX33xONJy0LA&usqp=CAU", },
                { id: "7", name: "Tits", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ1h_9TFQwCtEAYDKVDYMTphY4qXjZTfhTA&usqp=CAU", },
                { id: "10", name: "Neeko", dialogueAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkjxIxq0NxGPck5iudNCObHkFMPo6QDu24HHOiJZLKCgjQ1g0e7HW5qVv2fwmPJl1kFY&usqp=CAU", },
            ],
        },
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    setSubscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguePage = dialogueReducer(this._state.dialoguePage, action);
        this._state.navigationBar = navigationReducer(this._state.navigationBar, action);
        this._callSubscriber(this._state);
    },
};


export default store;
window.store = store;
