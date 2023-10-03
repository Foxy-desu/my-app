import React from "react";
import ProfileBanner from "./profile/my_profile/ProfileBanner/ProfileBanner";
import PostsContainer from "./profile/my_posts/PostsContainer";
import Profile from "./profile/Profile";


const Content = (props)=> {

    
    return (
        <main> 
            <ProfileBanner />
            <Profile />
            <PostsContainer state={props.state} 
                   dispatch={props.dispatch}/>
        </main>
    );
};


export default Content;
