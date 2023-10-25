import React from "react";
import ProfileAvatar from "../../my_profile/ProfileAvatar/ProfileAvatar";
import classes from "./Post.module.css";

class Post extends React.Component {
    render = () => {
        return (
            <article className={classes.post}>
                <div className={classes["image-container"]}>
                    <ProfileAvatar />
                </div>
                <div className={classes.message}>
                    <p>{this.props.message}</p>
                </div>
                <div className={classes.stats}>
                    <div>Like <span>"{this.props.likesCount}"</span></div>
                    <div>Comment <span>"{this.props.commentsCount}"</span></div>
                </div>
            </article>
        )
    }
};

export default Post;