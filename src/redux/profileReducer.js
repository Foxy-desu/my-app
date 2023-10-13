const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: "1", message: "Hello! This is my first post :)", likes: "35", comments: "8", },

    ],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        };
        case ADD_NEW_POST: {
            let newPost = {
                id: String((state.postData.length) + 1),
                message: state.newPostText,
                likes: 0,
                comments: 0,
            };
           
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: "", 
            }; 
        };
        default: 
            return state;
    };
    
};

export const newPostActionCreator = () => ({type: ADD_NEW_POST,}); 
export const textareaChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});
export default profileReducer;