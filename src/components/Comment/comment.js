import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Comment = ({ postId, commentMsg }) => {
  const navigate = useNavigate();
  const { username, profileAvatar, comment, fullName } = commentMsg;
  return (
    <>
      <div className="flex items-center gap-3 py-4 px-4 rounded bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700">
        <img
          className="w-10 h-10 rounded-full self-start dark:bg-gray-700 hover:cursor-pointer"
          src={profileAvatar}
          alt="User Avatar"
          onClick={() => {
            navigate(`/profile/${username}`);
          }}
        />

        <div className="flex flex-col gap-y-2 bg-white dark:bg-gray-800">
          <div className="name-credentials">
            <p className="font-semibold dark:text-white">{fullName}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{username}
            </p>
          </div>

          <p className="text-sm text-gray-800 font-normal bg-white dark:bg-gray-800 dark:text-white">
            {comment}
          </p>
        </div>
      </div>
    </>
  );
};

