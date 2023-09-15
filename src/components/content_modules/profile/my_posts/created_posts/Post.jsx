import React from "react";
import ProfileAvatar from "../../my_profile/ProfileAvatar/ProfileAvatar";
import classes from "./Post.module.css";

const Post = function (props) {
    return (
            <article className={classes.post}>
                <div className={classes["image-container"]}>
                    <ProfileAvatar />
                </div>
                <div className={classes.message}>
                    <p>{props.message}</p>
                </div>
                <div className={classes.stats}>
                    <div>Like <span>"{props.likesCount}"</span></div>
                    <div>Comment <span>"{props.commentsCount}"</span></div>
                </div>

            </article>
    )
};

export default Post;