import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navigationReducer from "./navigationReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    navigationBar: navigationReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;