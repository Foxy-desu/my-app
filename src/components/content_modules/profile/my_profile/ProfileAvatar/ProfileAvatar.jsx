import React from "react";
import classes from "./ProfileAvatar.module.css";

const ProfileAvatar = ()=> {
    return (
        <div className={classes['profile-avatar']}>
            <img className={classes["profile-avatar-image"]} width={180} height={180} src='https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-2.jpg'></img>
          </div>
    );
};

export default ProfileAvatar;