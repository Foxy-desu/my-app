import React from "react";
import classes from "./ProfileBanner.module.css";

class ProfileBanner extends React.Component {
    render = () => {
        return (
            <div className={classes['app-main__banner']}>
              <div className={classes['img-wrap']}>
                <img className={classes['banner-image']} src='https://i.pinimg.com/originals/50/c5/1e/50c51e02a205b44c3449fc128400ff20.jpg'></img>
                </div>
            </div>
        );
    }
};

export default ProfileBanner;