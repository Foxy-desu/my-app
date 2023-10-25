import React from "react";
import Post from "./created_posts/Post";
import classes from "./Posts.module.css";

class Posts extends React.Component {
    textArea = React.createRef();

    newPost = ()=> {
        this.props.newPost();
    };
    textareaChange = ()=> {
        let text = this.textArea.current.value;
        this.props.textchange(text);
    };
    keyDownHandler = (event)=> {
        if (event.key === 'Enter' && event.ctrlKey) {
            this.newPost();
        }
    };
    render =()=> { 
        let createdPostsComponents = this.props.posts.map((post) => {
            let result = (<Post message={post.message} likesCount={post.likes} commentsCount={post.comments} />);
            return result;
        });

        return (
            <section className={classes.posts}>
                <h2 className={classes['posts-heading']}>My posts</h2>
                <div className={classes['post-form']}>
                    <form name='create-post' id='post-form'>
                        <div><textarea value = {this.props.newtext} onChange={this.textareaChange} onKeyDown={this.keyDownHandler} ref={this.textArea} className={classes['post-form__post-textfield']} type='text'></textarea></div>
                        <div><button type='button' className={classes['post-form__post-button']} onClick={this.newPost}>Create a post</button></div>
                    </form>
                </div>
                <div className='created-posts-block'>
                    <div className={classes["posts-wrap"]}>
                        {createdPostsComponents}
                    </div>
                </div>
            </section>
        );
    }
};

export default Posts;