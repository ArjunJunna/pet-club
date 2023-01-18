import { getUserPostService } from '../../services/postServices';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const postInitialState = {
  data: null,
  loading: false,
};

const getUserPost = createAsyncThunk(
  'post/getUserPost',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await getUserPostService(postId);
      console.log('from user post:',data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: postInitialState,
  extraReducers: {
    [getUserPost.pending]: state => {
      state.loading = true;
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.loading = false;
      console.log('from single post',action);
      state.data = action.payload.post;
    },
    [getUserPost.rejected]: state => {
      state.loading = false;
    },
  },
});

const postReducer = postSlice.reducer;

export { getUserPost, postReducer };