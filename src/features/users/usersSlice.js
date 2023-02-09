import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllUsersService,
  followUserService,
  unFollowUserService,
} from '../../services';

const usersInitialState = {
  data: [],
  loading: false,
};

const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsersService();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const followUser = createAsyncThunk(
  'users/followUser',
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { data } = await followUserService(followUserId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const unFollowUser = createAsyncThunk(
  'users/followUser',
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { data } = await unFollowUserService(followUserId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  extraReducers: {
    [getAllUsers.pending]: state => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.users;
    },
    [getAllUsers.rejected]: state => {
      state.loading = false;
    },
    [followUser.fulfilled]: (state, action) => {
      state.data = action.payload.users;
    },
    [followUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [unFollowUser.fulfilled]: (state, action) => {
      state.data = action.payload.users;
    },
    [unFollowUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});


const usersReducer=usersSlice.reducer;

export { getAllUsers, followUser, unFollowUser, usersReducer };