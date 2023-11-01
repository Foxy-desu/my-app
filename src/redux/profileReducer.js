const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_CURRENT_PROFILE_ID = 'SET_CURRENT_PROFILE_ID';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    postData: [
        { id: "1", message: "Hello! This is my first post :)", likes: "35", comments: "8", },
    ],
    newPostText: "",
    profile: null,
    currentProfileId: 2,
    isFetching: false,
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
        case SET_USER_PROFILE: {
            return {
                ...state, 
                profile: action.profile
            }
        };
        case SET_CURRENT_PROFILE_ID: {
            return {
                ...state,
                currentProfileId: action.id
            }
        };
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: 
            return state;
    };
    
};

export const newPost = () => ({type: ADD_NEW_POST,}); 
export const textChange = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setCurrentProfileId = (id) => ({type: SET_CURRENT_PROFILE_ID, id});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default profileReducer;