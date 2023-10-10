import axios from 'axios';

const getBookmarkedPostsService = async token => {
  const response = await axios.get(
    '/api/users/bookmark',
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

  return response;
};

const addPostToBookmarksService = async (postId, token) => {
  const response = await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

  return response;
};

const removePostFromBookmarksService = async (postId, token) => {
  const response = await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );

  return response;
};

export {
  getBookmarkedPostsService,
  addPostToBookmarksService,
  removePostFromBookmarksService,
};
