import React from "react";
import Post from "./created_posts/Post";
import classes from "./Posts.module.css";

const Posts = (props) => {

    let textArea = React.createRef();
    let newPost = ()=> {
        props.dispatch({type: 'ADD-NEW-POST',});
    };

    let createdPostsComponents = props.appState.postData.map((post) => {
        let result = (<Post message={post.message} likesCount={post.likes} commentsCount={post.comments} />);
        return result;
    });

    let textareaChange = ()=> {
        let text = textArea.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text,});
    };

    let keyDownHandler = (event)=> {
        if (event.key === 'Enter' && event.ctrlKey) {
            newPost();
        }
    };

    return (
        <section className={classes.posts}>
            <h2 className={classes['posts-heading']}>My posts</h2>
            <div className={classes['post-form']}>
                <form name='create-post' id='post-form'>
                    <div><textarea value = {props.appState.newPostText} onChange={textareaChange} onKeyDown={keyDownHandler} ref={textArea} className={classes['post-form__post-textfield']} type='text'></textarea></div>
                    <div><button type='button' className={classes['post-form__post-button']} onClick={newPost}>Create a post</button></div>
                </form>
            </div>
            <div className='created-posts-block'>
                <div className={classes["posts-wrap"]}>
                    {createdPostsComponents}
                </div>
            </div>
        </section>
    );
};

export default Posts;