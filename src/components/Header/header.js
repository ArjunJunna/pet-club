import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { logoutHandler } from '../../features';
import useOnClickOutside from '../../utilities/js/useOnClickOutside';

export const Header = () => {
  const { user, token } = useSelector(state => state.auth);
  const { pathname } = useLocation();
  const { username } = user ?? {};
  const dispatch = useDispatch();
  const [showUserModal, setShowUserModal] = useState(false);
  const [theme, setTheme] = useState(null);
  const [menu, showMenu] = useState(false);
  const ref = useRef();
  const menuRef = useRef();
  const handlerRef = () => {
    setShowUserModal(false);
  };
  const menuHandler = () => {
    showMenu(prev => !prev);
  };
  useOnClickOutside(menuRef, menuHandler);
  useOnClickOutside(ref, handlerRef);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <nav className="sticky top-0 z-20 w-full flex justify-around items-center py-3 border-b-[0.1px] dark:border-gray-700 border-gray-200 bg-white dark:bg-slate-900 ">
        {pathname !== '/login' &&
          pathname !== '/signup' && (
            <i
              className="bi bi-list pl-4 text-xl md:hidden text-slate-900 dark:text-white"
              onClick={() => {
                showMenu(prev => !prev);
              }}
            ></i>
          )}

        {menu && (
          <>
            <div
              className="bg-gray-100 dark:bg-slate-800 h-[20rem] w-[16rem] z-30 absolute top-0 left-0 flex flex-col rounded-br-md "
              ref={menuRef}
            >
              <div className="flex p-3">
                <Link to="/home" className="mr-auto cursor-pointer">
                  <img
                    src="../assets/images/petclub.png"
                    alt="logo"
                    className="h-7"
                  />
                </Link>
                <i
                  class="bi bi-x-lg text-slate-900 dark:text-white text-xl"
                  onClick={() => {
                    showMenu(prev => !prev);
                  }}
                ></i>
              </div>
              <ul className="mt-4 space-y-5 flex flex-col items-center justify-center ">
                <li className="">
                  <Link
                    className="flex p-2 text-lg rounded-lg text-gray-900 dark:text-white  dark:hover:bg-gray-800 hover:bg-gray-200 font-semibold"
                    to="/home"
                    onClick={() => showMenu(prev => !prev)}
                  >
                    <i className="bi bi-house-door-fill mr-3"></i>Home
                  </Link>
                </li>
                <li className="ml-10">
                  <Link
                    className="flex p-2 text-lg rounded-lg text-gray-800 dark:text-white  dark:hover:bg-gray-800 hover:bg-gray-200 font-semibold"
                    to="/bookmarks"
                    onClick={() => showMenu(prev => !prev)}
                  >
                    <i className="bi bi-bookmark-fill mr-3"></i>Bookmarks
                  </Link>
                </li>
                <li className="ml-2">
                  <Link
                    className="flex-none p-2 text-lg rounded-lg text-gray-800 dark:text-white  dark:hover:bg-gray-800 hover:bg-gray-200 font-semibold"
                    to="/explore"
                    onClick={() => showMenu(prev => !prev)}
                  >
                    <i className="bi bi-compass-fill mr-3"></i>Explore
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    className="flex-none p-2 text-lg rounded-lg text-gray-800 dark:text-white  dark:hover:bg-gray-800 hover:bg-gray-200 font-semibold"
                    to={`/profile/${username}`}
                    onClick={() => showMenu(prev => !prev)}
                  >
                    <i className="bi bi-person-fill mr-3"></i>Profile
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        <Link to="/home" className="mr-auto pl-4 cursor-pointer">
          <img src="../assets/images/petclub.png" alt="logo" className="h-7" />
        </Link>
        {/* 
        <div className="bg-gray-100 dark:bg-slate-800 rounded-full h-9 w-[25rem] border dark:border-gray-600 border-gray-200 focus-within:border-orange-700">
          <input
            type="text"
            placeholder="Search people..."
            className="bg-inherit outline-none mt-1 ml-4 text-black dark:text-gray-200 w-[85%]"
          />
          <i className="bi bi-search ml-2.5 cursor-pointer text-orange-600"></i>
        </div>
          */}
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
              <div
                className="absolute top-12 right-8 text-sm flex flex-col gap-1.5 items-start   text-center border shadow-xl  z-10   rounded  dark:shadow-slate-900 dark:bg-slate-800  dark:text-slate-100 border-gray-300 dark:border-slate-500 text-slate-900 bg-white "
                ref={ref}
              >
                <Link to={`/profile/${username}`}>
                  <div
                    className="cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-700 py-2 px-4 w-36 rounded"
                    onClick={() => setShowUserModal(prev => !prev)}
                  >
                    Profile
                  </div>
                </Link>
                <div
                  className="cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-700 py-2 px-4 w-36 rounded"
                  onClick={() => {
                    handleThemeSwitch();
                    setShowUserModal(prev => !prev);
                  }}
                >
                  {theme === 'light' ? (
                    <>
                      <i className="mr-2 bi bi-moon-fill"></i>
                      <span className="text-sm">Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <i className="mr-2 bi bi-brightness-high"></i>
                      <span className="text-sm">Light Mode</span>
                    </>
                  )}
                </div>

                <div
                  className="cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-700 py-2 px-4 w-36 rounded"
                  onClick={() => {
                    dispatch(logoutHandler());
                    setShowUserModal(prev => !prev);
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
