import React from "react";
import ProfileBanner from "./profile/my_profile/ProfileBanner/ProfileBanner";
import PostsContainer from "./profile/my_posts/PostsContainer";
import Profile from "./profile/Profile";


const Content = ()=> {    
    return (
        <main> 
            <ProfileBanner />
            <Profile />
            <PostsContainer/>
        </main>
    );
};


export default Content;
