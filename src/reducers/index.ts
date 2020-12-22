import { combineReducers } from "redux";
import loggedReducer from "./LoggedReducer";

const allReducers = combineReducers({
  isLogged: loggedReducer
});

export default allReducers;
