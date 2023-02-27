import axios from 'axios';

const getUserService = async username => {
  const response = await axios.get(`/api/users/${username}`);
  return response;
};

const editUserService = async (userData, token) => {
  const response = await axios.post(
    `/api/users/edit`,
    { userData },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response;
};

const getAllUsersService = async () => {
  const response = await axios.get('/api/users');
  return response;
};

const followUserService = async (followUserId, token) => {
  const response = await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response;
};

const unFollowUserService = async (followUserId, token) => {
  const response = await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response;
};

export {
  getUserService,
  getAllUsersService,
  followUserService,
  unFollowUserService,
  editUserService,
};
