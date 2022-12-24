import React from 'react';
import {Link} from 'react-router-dom';

export const SideBar = () => {
  return (
    <>
      <aside class="w-64 h-full sticky top-20">
        <ul class="mt-4 space-y-3 flex flex-col items-center">
          <li class="">
            <Link
              class="flex p-2 text-lg rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold"
              to="/home"
            >
              <i class="bi bi-house-door-fill mr-3"></i>Home
            </Link>
          </li>
          <li class="ml-10">
            <Link
              class="flex p-2 text-lg rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold"
              to="/bookmarks"
            >
              <i class="bi bi-bookmark-fill mr-3"></i>Bookmarks
            </Link>
          </li>
          <li class="ml-2">
            <Link
              class="flex-none p-2 text-lg rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold"
              to="/explore"
            >
              <i class="bi bi-compass-fill mr-3"></i>Explore
            </Link>
          </li>
          <li class="flex items-center">
            <Link
              class="flex-none p-2 text-lg rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold"
              to="/profile"
            >
              <i class="bi bi-person-fill mr-3"></i>Profile
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};


