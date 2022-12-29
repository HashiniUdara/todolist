import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/usersSlice";

import LoginReducer from "../features/login/LoginScice";

export default configureStore({
  reducer : {
    // counter :counterReducer,
    posts:postReducer,
    users:usersReducer,
    login:LoginReducer
  },
})