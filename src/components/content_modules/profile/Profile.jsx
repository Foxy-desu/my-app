import React from "react";
import ProfileAvatar from "./my_profile/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./my_profile/ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = (props)=> {



    return (
    <section className={classes['app-main__profile']}>
        <div className={classes["profile-avatar-block"]}>
            <ProfileAvatar />
        </div>
        <ProfileInfo />
    </section>
    );
};

export default Profile;