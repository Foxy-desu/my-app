import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state, addNewPost, createNewMessage, updateNewPostText, updateNewMessageText, subscribe} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
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
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
