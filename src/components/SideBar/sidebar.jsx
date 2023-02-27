import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SideBar = () => {
  const {
    user: { username },
  } = useSelector(state => state.auth);
  return (
    <>
      <aside className="w-64 h-full sticky top-20">
        <ul className="mt-4 space-y-3 flex flex-col items-center">
          <li className="">
            <Link
              className="flex p-2 text-lg rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 font-semibold"
              to="/home"
            >
              <i className="bi bi-house-door-fill mr-3"></i>Home
            </Link>
          </li>
          <li className="ml-10">
            <Link
              className="flex p-2 text-lg rounded-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 font-semibold"
              to="/bookmarks"
            >
              <i className="bi bi-bookmark-fill mr-3"></i>Bookmarks
            </Link>
          </li>
          <li className="ml-2">
            <Link
              className="flex-none p-2 text-lg rounded-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 font-semibold"
              to="/explore"
            >
              <i className="bi bi-compass-fill mr-3"></i>Explore
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              className="flex-none p-2 text-lg rounded-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 font-semibold"
              to={`/profile/${username}`}
            >
              <i className="bi bi-person-fill mr-3"></i>Profile
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              className="flex-none p-2 text-lg rounded-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 font-semibold"
              to="/mockapi"
            >
              <i className="bi bi-gear-fill"></i>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};
