import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/storeRedux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    );
};

rerenderEntireTree(store.getState());

reportWebVitals();
