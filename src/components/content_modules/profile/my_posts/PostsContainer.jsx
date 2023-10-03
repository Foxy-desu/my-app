import React from "react";
import Posts from "./Posts";
import { newPostActionCreator, textareaChangeActionCreator } from "../../../../redux/profileReducer";

const PostsContainer = (props) => {

    let newPost = ()=> {
        let action = newPostActionCreator();
        props.dispatch(action);
    };

    let postsArray = props.state.profilePage.postData;

    let updateNewPostText = (text)=> {
        let action = textareaChangeActionCreator(text);
        props.dispatch(action);
    };

    let newPostText = props.state.profilePage.newPostText;

    return (
        <Posts newPost={newPost} posts={postsArray} textchange={updateNewPostText} newtext={newPostText}/>
    );
};

export default PostsContainer;