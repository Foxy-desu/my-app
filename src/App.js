import React from "react";
import './App.css';
import Header from "./components/header_modules/Header";
import Navigation from "./components/navigation_modules/Navigation";
import Content from "./components/content_modules/Content";
import Footer from "./components/footer_modules/Footer";
import Dialogues from "./components/content_modules/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Music from "./components/content_modules/Music/Music";
import News from "./components/content_modules/News/News";
import Settings from "./components/content_modules/Settings/Settings";
import Friends from "./components/content_modules/Friends/Friends";

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation appState={props.appState.navigationBar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="*" element={<Navigate to="/profile"/>}/>
            <Route path="/profile" element={<Content postData={props.appState.profilePage.postData} 
                                                     addNewPost={props.addNewPost} 
                                                     newPostText={props.appState.profilePage.newPostText} 
                                                     updateNewPostText={props.updateNewPostText}/>} />
            <Route path="/dialogues/*" element={<Dialogues appState={props.appState.dialoguePage}
                                                           createNewMessage={props.createNewMessage}
                                                           newMessageText={props.appState.dialoguePage.newMessageText}
                                                           updateNewMessageText={props.updateNewMessageText}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends/*" element={<Friends/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
