import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginHandler = createAsyncThunk(
  'auth/loginHandler',
  async (arg, { rejectWithValue }) => {
    const { login, setLogin } = arg;
    try {
      const { data, status } = await axios.post('/api/auth/login', login.input);
      if (status === 200) {
        localStorage.setItem('token', data.encodedToken);
        localStorage.setItem('user', JSON.stringify(data.foundUser));
        toast.success('You are logged in...');
        return data;
      }
    } catch (error) {
      setLogin({ ...login, error: error.response.statusText });
      return rejectWithValue([], false);
    }
  }
);

export const signUpHandler = createAsyncThunk(
  'auth/signUpHandler',

  async (arg, { rejectWithValue }) => {
    const { signup, setSignup } = arg;

    try {
      const { data, status } = await axios.post(
        '/api/auth/signup',
        signup.input
      );

      if (status === 201) {
        localStorage.setItem('token', data.encodedToken);
        localStorage.setItem('user', JSON.stringify(data.createdUser));
        return data;
      }
    } catch (error) {
      setSignup({ ...signup, error: error.response.statusText });
      return rejectWithValue([], false);
    }
  }
);

const initialState = {
  token:null,
  user: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutHandler: state => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.success('You are logged out...');
    },
  },

  extraReducers: {
    // login
    [loginHandler.pending]: state => {
      state.isLoading = true;
    },
    [loginHandler.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
      state.user = JSON.parse(localStorage.getItem('user'));
    },
    [loginHandler.rejected]: (state, { payload }) => {
      state.isLoading = payload;
    },
    // signup
    [signUpHandler.pending]: state => {
      state.isLoading = true;
    },
    [signUpHandler.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
    },
    [signUpHandler.rejected]: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

const { logoutHandler } = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, logoutHandler };
