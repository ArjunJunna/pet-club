import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { followUser, unFollowUser } from '../../features';
import { useState } from 'react';

export const SuggestedUserCard = ({
  _id,
  profileAvatar,
  fullName,
  username,
}) => {
  const [follow, setFollow] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);
  const {
    profile: { data: profile },
  } = useSelector(state => state.user);
  const { following } = profile;

  const followUserHandler = () => {
    setFollow(prev => !prev);
    dispatch(followUser({ followUserId: _id, token }));
  };

  const unFollowUserHandler = () => {
    setFollow(prev => !prev);
    dispatch(unFollowUser({ followUserId: _id, token }));
  };

  return (
    <div className="flex gap-2">
      <span>
        <img
          src={profileAvatar}
          alt="Profile Avatar"
          className="h-8 w-8 sm:h-8 sm:w-8 rounded-full hover:cursor-pointer"
          onClick={e => {
            e.stopPropagation();
            navigate(`/profile/${username}`);
          }}
        />
      </span>
      <div className="flex flex-col grow -mt-0.5">
        <span className="text-sm font-semibold text-gray-600 dark:text-white">{fullName}</span>
        <span className="text-sm text-gray-500">@{username}</span>
      </div>
      {follow ? (
        <button
          className="bg-orange-600 rounded-full px-3 font-medium h-7 w-24 hover:cursor-pointer"
          onClick={followUserHandler}
        >
          Follow
        </button>
      ) : (
        <button
          className="bg-orange-600 rounded-full px-3 font-medium h-7 w-24 hover:cursor-pointer"
          onClick={unFollowUserHandler}
        >
          Unfollow
        </button>
      )}
    </div>
  );
};
