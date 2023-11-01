import React from "react";
import classes from "./ProfileAvatar.module.css";
import userphoto from "../../../../../assets/images/user-image-mock.png"


class ProfileAvatar extends React.Component {
    render =()=> {
        return (
            <div className={`${classes['profile-avatar']} ${classes['profile-avatar-block']}`}>
                <img className={classes["profile-avatar-image"]} width={180} height={180} src={this.props.photos ? this.props.photos.large || this.props.photos.small || userphoto : userphoto }></img>
            </div>
        );
    };
};

export default ProfileAvatar;