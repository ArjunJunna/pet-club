import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllPostsService,
  likePostService,
  dislikePostService,
  createPostService,
  addPostCommentService,
} from '../../services';

const postsInitialState = {
  data: [],
  loading: false,
  error: '',
};

const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllPostsService();

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const likePost = createAsyncThunk(
  'posts/likePost',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await likePostService(postId, token);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

const dislikePost = createAsyncThunk(
  'posts/dislikePost',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await dislikePostService(postId, token);
      console.log('dislike:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

const createPost = createAsyncThunk(
  'posts/createPost',
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const { data } = await createPostService(postData, token);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

const addPostComment = createAsyncThunk(
  'posts/addPostComment',
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const { data } = await addPostCommentService(postId, commentData, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: {
    [getAllPosts.pending]: state => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.posts;
    },
    [getAllPosts.rejected]: state => {
      state.loading = false;
    },
    [likePost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [createPost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [createPost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addPostComment.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [addPostComment.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

const postsReducer = postsSlice.reducer;

export {
  likePost,
  dislikePost,
  getAllPosts,
  postsReducer,
  createPost,
  addPostComment,
};
