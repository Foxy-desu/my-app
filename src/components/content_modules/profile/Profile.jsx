import React from "react";
import ProfileAvatar from "./my_profile/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./my_profile/ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";

class Profile extends React.Component {
    render = () => {
        return (
            <section className={classes['app-main__profile']}>
                <div className={classes["profile-avatar-block"]}>
                    <ProfileAvatar />
                </div>
                <ProfileInfo />
            </section>
        );
    }
};

export default Profile;