import reportWebVitals from './reportWebVitals';
import rerenderEntireTree from "./render";
import {state, addNewPost, createNewMessage, updateNewPostText, updateNewMessageText} from './redux/state';

rerenderEntireTree(state, addNewPost, createNewMessage, updateNewPostText, updateNewMessageText);
reportWebVitals();
