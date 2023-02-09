import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postsReducer,postReducer,userReducer,bookmarksReducer,usersReducer } from './features';

export const store=configureStore({
    reducer:{
        auth:authReducer,
        posts:postsReducer,
        post:postReducer,
        user:userReducer,
        bookmarks:bookmarksReducer,
        users:usersReducer,
    },
});