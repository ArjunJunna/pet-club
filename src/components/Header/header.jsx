import React from 'react';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { user, token } = useSelector(state => state.auth);

  return (
    <>
      <nav className="sticky top-0 z-20 w-full flex justify-around items-center py-3 border-b-[0.1px] border-gray-700 dark:bg-slate-900">
        <Link to="/home" className="mr-auto pl-4 cursor-pointer">
          <img src="../assets/images/petclub.png" alt="logo" className="h-7" />
        </Link>
        <div className="bg-slate-800 rounded-full h-9 w-[25rem] border border-gray-600 focus-within:border-orange-700">
          <input
            type="text"
            placeholder="Search people..."
            className="bg-inherit outline-none mt-1 ml-4 text-gray-200 w-[85%]"
          />
          <i className="bi bi-search ml-2.5 cursor-pointer text-orange-600"></i>
        </div>

        {token ? (
          <button className="cursor-pointer ml-auto pr-4">
            <img
              src={user.profileAvatar}
              alt="avatar"
              className="h-10 w-10 sm:h-10 sm:w-10 rounded-full  hover:cursor-pointer"
            />
          </button>
        ) : (
          <span className="cursor-pointer ml-auto pr-4 text-orange-600 font-medium">
            Welcome to Pet-Club
          </span>
        )
        }
      </nav>
    </>
  );
};
