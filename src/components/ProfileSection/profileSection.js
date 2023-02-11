import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutHandler } from '../../features';

export const ProfileSection = ({ profile }) => {
  const dispatch = useDispatch();
  const {
    fullName,
    profileAvatar,
    username,
    bio,
    website,
    followers,
    following,
  } = profile;

  return (
    <div className="flex p-4 gap-5">
      <img
        className="w-28 h-28 rounded-full sm:w-24 sm:h-24"
        src={profileAvatar}
        alt="User Avatar"
      />
      <div className="flex flex-col grow gap-1 font-medium dark:text-white">
        <div className="name-credentials">
          <p className="font-bold text-lg md:text-2xl lg:text-3xl ">
            {fullName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @{username}
          </p>
        </div>
        <p className="text-md font-normal lg:text-lg">{bio}</p>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-link-45deg h-5 w-5 fill-sky-600"
            viewBox="0 0 16 16"
          >
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
          </svg>
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="text-base font-light text-sky-600 hover:underline"
          >
            {website}
          </a>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <p className="text-sm font-bold sm:text-md">1</p>
            <p className="text-sm font-light dark:text-gray-400 sm:text-md">
              Following
            </p>
          </div>
          <div className="flex gap-1">
            <p className="text-sm font-bold sm:text-md">2</p>
            <p className="text-sm font-light dark:text-gray-400 sm:text-md">
              Followers
            </p>
          </div>
        </div>
      </div>
      <Link to="#" className="ml-auto">
        <button className="rounded-3xl bg-slate-800 py-2 px-3">Edit</button>
      </Link>
    </div>
  );
};
