import React from "react";
import ProfileBanner from "./profile/my_profile/ProfileBanner/ProfileBanner";
import Posts from "./profile/my_posts/Posts";
import Profile from "./profile/Profile";


const Content = (props)=> {

    
    return (
        <main> 
            <ProfileBanner />
            <Profile />
            <Posts appState={props.appState} 
                   dispatch={props.dispatch}/>
        </main>
    );
};


export default Content;
