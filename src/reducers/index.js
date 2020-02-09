import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";


const AllReducers = combineReducers({
    counterReducer : counterReducer,
    isLoggedReducer: isLoggedReducer

});


export default AllReducers;


