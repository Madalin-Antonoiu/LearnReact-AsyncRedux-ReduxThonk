import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "redux";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
