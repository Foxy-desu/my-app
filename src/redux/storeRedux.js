import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogueReducer from "./dialogueReducer";
import navigationReducer from "./navigationReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguePage: dialogueReducer,
    navigationBar: navigationReducer,
})

let store = createStore(reducers);

export default store;