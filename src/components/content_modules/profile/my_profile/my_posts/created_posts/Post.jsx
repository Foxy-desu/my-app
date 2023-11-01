import React from "react";
import ProfileAvatar from "../../ProfileAvatar/ProfileAvatar";
import classes from "./Post.module.css";

class Post extends React.Component {
    render = () => {
        return (
            <article className={classes['post__card']}>
                <div className={classes["post__image-container"]}>
                    <ProfileAvatar />
                </div>
                <div className={classes['post__message-wrap']}>
                    <div className={classes['post__message']}>
                        <p className={classes['post__message-text']}>{this.props.message}</p>
                    </div>
                    <div className={classes.stats}>
                        <div>Like <span>"{this.props.likesCount}"</span></div>
                        <div>Comment <span>"{this.props.commentsCount}"</span></div>
                    </div>
                </div>
            </article>
        )
    }
};

export default Post;