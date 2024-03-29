import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllPostsService,
  likePostService,
  dislikePostService,
  createPostService,
  addPostCommentService,
  editPostService,
  deletePostService,
  deletePostCommentService,
  editPostCommentService,
} from '../../services';
import { toast } from 'react-toastify';

const postsInitialState = {
  data: [],
  loading: false,
  error: '',
  activeSort: 'Latest',
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

const editPost=createAsyncThunk(
  'posts/editPost',
  async({postId,postData,token},{rejectWithValue})=>{ 
    try{
      const { data } = await editPostService(postId, postData, token);
      toast.success('Post is updated successfully.')
      return data;
    }catch(error){
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const deletePost = createAsyncThunk(
  'posts/deletePost',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await deletePostService(postId, token);
      toast.success("Post deleted.");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const deletePostComment=createAsyncThunk('posts/deletePostComment',async({postId,commentId,token},{rejectWithValue})=>{
try {
  const { data } = await deletePostCommentService(postId, commentId, token);
  toast.success('Comment deleted.');
  return data;
} catch (error) {
  return rejectWithValue(error.response.data.errors[0]);
}
})

const editPostComment = createAsyncThunk(
  'posts/editPostComment',
  async ({ postId, commentId, token, commentData },{rejectWithValue}) => {
    try {
      const { data } = await editPostCommentService(postId, commentId, token,commentData);
      toast.success('Comment edited.');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);



const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    setActiveSort: (state, { payload }) => {
      state.activeSort = payload;
    },
  },
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
    [editPost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [addPostComment.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [addPostComment.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deletePostComment.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [editPostComment.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
  },
});

const postsReducer = postsSlice.reducer;

export const { setActiveSort } = postsSlice.actions;

export {
  likePost,
  dislikePost,
  getAllPosts,
  postsReducer,
  createPost,
  addPostComment,
  deletePostComment,
  editPostComment,
  editPost,
  deletePost,
};
