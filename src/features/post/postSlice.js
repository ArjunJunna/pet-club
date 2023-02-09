import { getUserPostService } from '../../services/postServices';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const postInitialState = {
  data: null,
  loading: false,
  activeSort: 'Latest',
};

const getUserPost = createAsyncThunk(
  'post/getUserPost',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await getUserPostService(postId);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: postInitialState,
  reducers: {
    setActiveSort: (state, { payload }) => {
      state.activeSort = payload;
    },
  },
  extraReducers: {
    [getUserPost.pending]: state => {
      state.loading = true;
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.post;
    },
    [getUserPost.rejected]: state => {
      state.loading = false;
    },
  },
});

const postReducer = postSlice.reducer;

export const { setActiveSort } = postSlice.actions;

export { getUserPost, postReducer };
