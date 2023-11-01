import React from 'react';
import ProfileBanner from './my_profile/ProfileBanner/ProfileBanner';
import ProfileInfo from './my_profile/ProfileInfo/ProfileInfo';
import PostsContainer from './my_profile/my_posts/PostsContainer';
import classes from "./Profile.module.css";

const Profile = (props) => {
    // const profile = props.profile ? props.profile : null;

    return (
        <section className={classes['profile']}>
            <ProfileBanner />
            <ProfileInfo profile={props.profile} />
            <PostsContainer profile={props.profile} postData={props.postData} postText={props.newPostText}/>
        </section>
    );

};

export default Profile;