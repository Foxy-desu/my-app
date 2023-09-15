import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state, addNewPost, createNewMessage, updateNewPostText, updateNewMessageText) => {
    root.render(
        <React.StrictMode>
            <App appState={state} 
                 addNewPost={addNewPost} 
                 createNewMessage={createNewMessage} 
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
    );
};

export default rerenderEntireTree;