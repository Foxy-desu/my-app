import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from "./components/header_modules/Header";
import NavigationContainer from "./components/navigation_modules/NavigationContainer";
import Content from "./components/content_modules/Content";
import Footer from "./components/footer_modules/Footer";
import DialogsContainer from "./components/content_modules/Dialogs/DialogsContainer";
import Music from "./components/content_modules/Music/Music";
import News from "./components/content_modules/News/News";
import Settings from "./components/content_modules/Settings/Settings";
import Friends from "./components/content_modules/Friends/Friends";
import UsersContainer from "./components/content_modules/Users/UsersContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavigationContainer/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="*" element={<Navigate to="/profile"/>}/>
            <Route path="/profile" element={<Content/>} />
            <Route path="/dialogues/*" element={<DialogsContainer/>}/>
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends/*" element={<Friends/>} />
            <Route path="/users" element={<UsersContainer/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
