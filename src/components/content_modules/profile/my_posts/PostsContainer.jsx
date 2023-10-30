import Posts from "./Posts";
import {newPost, textChange} from "../../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state)=> {
    return{
        posts: state.profilePage.postData,
        newtext: state.profilePage.newPostText,
    };
};

const PostsContainer = connect(mapStateToProps, {newPost, textChange})(Posts);

export default PostsContainer;