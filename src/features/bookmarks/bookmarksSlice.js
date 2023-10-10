import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getBookmarkedPostsService,
  addPostToBookmarksService,
  removePostFromBookmarksService,
} from '../../services';
import { toast } from 'react-toastify';

const bookmarksInitialState = {
  data: [],
  loading: false,
};

const getBookmarkedPosts = createAsyncThunk(
  'bookmarks/getBookmarkedPosts',
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await getBookmarkedPostsService(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const addPostToBookmarks = createAsyncThunk(
  'bookmarks/addToBookmarkPosts',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await addPostToBookmarksService(postId, token);
      toast.success('Post added to the bookmarks.');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const removePostFromBookmarks = createAsyncThunk(
  'bookmarks/removeFromBookmarkPosts',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await removePostFromBookmarksService(postId, token);
      toast.success('Post removed from the bookmarks.');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: bookmarksInitialState,
  extraReducers: {
    [getBookmarkedPosts.pending]: state => {
      state.loading = true;
    },
    [getBookmarkedPosts.rejected]: state => {
      state.loading = false;
    },
    [getBookmarkedPosts.fulfilled]: (state, action) => {
      state.data = action.payload.bookmarks;
      state.loading = false;
    },
    [addPostToBookmarks.rejected]: state => {
      state.loading = false;
    },
    [addPostToBookmarks.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.bookmarks;
    },
    [removePostFromBookmarks.rejected]: state => {
      state.loading = false;
    },
    [removePostFromBookmarks.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.bookmarks;
    },
  },
});

const bookmarksReducer = bookmarksSlice.reducer;

export {
  getBookmarkedPosts,
  addPostToBookmarks,
  removePostFromBookmarks,
  bookmarksReducer,
};
