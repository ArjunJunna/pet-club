import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { logoutHandler } from '../../features';
import useOnClickOutside from '../../utilities/js/useOnClickOutside';

export const Header = () => {
  const { user, token } = useSelector(state => state.auth);
  const { username } = user??{};
  const dispatch = useDispatch();
  const [showUserModal, setShowUserModal] = useState(false);
  const ref =useRef();
  const handlerRef = () => {
    setShowUserModal(false);
  };
  useOnClickOutside(ref, handlerRef);

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
          <>
            <button
              className="cursor-pointer  pr-4 ml-auto relative"
              onClick={() => {
                setShowUserModal(prev => !prev);
              }}
            >
              <img
                src={user?.profileAvatar}
                alt="avatar"
                className="h-10 w-10 sm:h-10 sm:w-10 rounded-full  hover:cursor-pointer"
              />
            </button>

            {showUserModal ? (
              <div className="absolute top-12 right-8 text-sm flex flex-col gap-1.5 items-start bg-slate-800 rounded shadow-slate-900 shadow-xl  z-10 text-slate-100  text-center border border-slate-500" ref={ref}>
                <Link to={`/profile/${username}`}>
                  <div className="cursor-pointer hover:bg-slate-700 py-2 px-4 w-24 rounded">
                    Profile
                  </div>
                </Link>

                <div
                  className="cursor-pointer hover:bg-slate-700 py-2 px-4 w-24 rounded"
                  onClick={() => {
                    dispatch(logoutHandler());
                  }}
                >
                  Logout
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <span className="cursor-pointer ml-auto pr-4 text-orange-600 font-medium">
            Welcome to Pet-Club
          </span>
        )}
      </nav>
    </>
  );
};