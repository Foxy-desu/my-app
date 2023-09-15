import React from "react";
import ProfileBanner from "./profile/my_profile/ProfileBanner/ProfileBanner";
import Posts from "./profile/my_posts/Posts";
import Profile from "./profile/Profile";


const Content = (props)=> {

    
    return (
        <main> 
            <ProfileBanner />
            <Profile />
            <Posts postData={props.postData} 
                   addNewPost={props.addNewPost} 
                   newPostText ={props.newPostText} 
                   updateNewPostText={props.updateNewPostText}/>
        </main>
    );
};


export default Content;
