import Posts from "./Posts";
import { newPostActionCreator, textareaChangeActionCreator } from "../../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state)=> {
    return{
        posts: state.profilePage.postData,
        newtext: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch)=> {
    return{
        newPost: ()=>{
            dispatch(newPostActionCreator());
        },
        textchange: (text)=>{
            dispatch(textareaChangeActionCreator(text))
        },
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;