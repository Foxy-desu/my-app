import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from "./components/header_modules/Header";
import Navigation from "./components/navigation_modules/Navigation";
import Content from "./components/content_modules/Content";
import Footer from "./components/footer_modules/Footer";
import Dialogues from "./components/content_modules/Dialogs/Dialogs";
import Music from "./components/content_modules/Music/Music";
import News from "./components/content_modules/News/News";
import Settings from "./components/content_modules/Settings/Settings";
import Friends from "./components/content_modules/Friends/Friends";

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation state={props.state.navigationBar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="*" element={<Navigate to="/profile"/>}/>
            <Route path="/profile" element={<Content appState={props.state.profilePage} 
                                                     dispatch={props.dispatch}/>} />
            <Route path="/dialogues/*" element={<Dialogues appState={props.state.dialoguePage}
                                                           dispatch={props.dispatch} />}/>
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
