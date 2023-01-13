import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postsReducer,postReducer } from './features';

export const store=configureStore({
    reducer:{
        auth:authReducer,
        posts:postsReducer,
        post:postReducer,
    },
});