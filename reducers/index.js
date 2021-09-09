import { combineReducers } from "redux";
import auth from "./auth";
import userEvents from "./userEvents";
export default function rootReducers() {
  return combineReducers({
    auth,
    userEvents,
  });
}
