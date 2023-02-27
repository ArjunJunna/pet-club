import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllUserPostsService,
  getUserService,
  editUserService,
} from '../../services';
import { toast } from 'react-toastify';

const userInitialState = {
  profile: {
    data: [],
    loading: false,
  },
  posts: {
    data: [],
    loading: false,
  },
};

const getUser = createAsyncThunk(
  'user/getUser',
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getUserService(username);
      console.log('from get user:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const getAllUserPosts = createAsyncThunk(
  'user/getAllUserPosts',
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getAllUserPostsService(username);
      console.log('from get all user posts:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

const editUserDetails = createAsyncThunk(
  'user/editUserDetails',
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const { data } = await editUserService(userData,token);
      toast.success('Profile has been updated successfully.');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: {
    [getUser.pending]: state => {
      state.profile.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.profile.loading = false;
      console.log('from get all users:', action.payload);
      state.profile.data = action.payload.user;
    },
    [getUser.rejected]: state => {
      state.profile.loading = false;
    },
    [getAllUserPosts.pending]: state => {
      state.posts.loading = true;
    },
    [getAllUserPosts.fulfilled]: (state, action) => {
      state.posts.loading = false;
      console.log('from getall user posts:', action.payload);
      state.posts.data = action.payload.posts;
    },
    [getAllUserPosts.rejected]: state => {
      state.posts.loading = false;
    },
    [editUserDetails.pending]: state => {
      state.profile.loading = true;
    },
    [editUserDetails.fulfilled]: (state, action) => {
      state.profile.loading = false;
      state.profile.data = action.payload.user;
    },
    [editUserDetails.rejected]: state => {
      state.profile.loading = false;
    },
  },
});

const userReducer = userSlice.reducer;

export { userReducer, getUser, getAllUserPosts ,editUserDetails};
