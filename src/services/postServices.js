import axios from 'axios';

const getAllPostsService = async () => {
  try {
    const response = await axios.get('/api/posts');
    return response;
  } catch (error) {
    console.log(error.message);
    return;
  }
};

const getUserPostService = async postId => {
  try {
    const response = await axios.get(`/api/posts/${postId}`);
    return response;
  } catch (error) {
    console.log(error.message);
    return;
  }
};

const getAllUserPostsService = async username => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    return response;
  } catch (error) {
    console.log(error.message);
    return;
  }
};

const likePostService = async (postId, token) => {
  try {
    const response = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      { headers: { authorization: token } }
    );
    return response;
  } catch (error) {
    console.log(error.message);
    return;
  }
};

const dislikePostService = async (postId, token) => {
  try {
    const response = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      { headers: { authorization: token } }
    );
    return response;
  } catch (error) {
    console.log(error.message);
    return;
  }
};

const createPostService = async (postData, token) => {
  try {
    const response = await axios.post(
      '/api/posts',
      { postData },
      { headers: { authorization: token } }
    );
    console.log("from post service:",response);
    return response;
  } catch (error) {
    console.log(error.message);
    return;
  }
};

const editPostService = async (postId, postData, token) => {
  try {
    const response = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      {
        headers: { authorization: token },
      }
    );
    return response;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

const deletePostService = async (postId, token) => {
  try {
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.error(error.message);
    return;
  }
};


export {
  getAllPostsService,
  getUserPostService,
  getAllUserPostsService,
  likePostService,
  dislikePostService,
  createPostService,
  editPostService,
  deletePostService,
};
