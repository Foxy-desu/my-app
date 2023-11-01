import React from "react";
import classes from "./ProfileBanner.module.css";

class ProfileBanner extends React.Component {
    render = () => {
        return (
            <div className={classes['profile__banner']}>
              <div className={classes['profile__banner-wrap']}>
                <img className={classes['profile__banner-image']} src='https://i.pinimg.com/originals/50/c5/1e/50c51e02a205b44c3449fc128400ff20.jpg'></img>
                </div>
            </div>
        );
    }
};

export default ProfileBanner;