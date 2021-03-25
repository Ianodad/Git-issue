import {combineReducers} from 'redux';
import authReducer from "./auth";
import gitHubApiReducer from "./gitHubApi"

export default combineReducers({
    auth: authReducer,
    gitHubApiData: gitHubApiReducer

})