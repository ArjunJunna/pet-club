import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <div className="h-[30rem] mt-4">
        <div className="m-auto p-4 w-fit rounded-lg border border-gray-200 sm:p-6 sm:w-96 lg:p-8 dark:bg-slate-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <form className="space-y-6">
              <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">
                Sign In
              </h5>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Username
                </label>
                <input
                  type="name"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="e.g. tomcruise"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  minLength="8"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-orange-600 hover:bg-orange-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                Login
              </button>
              <button
                type="button"
                className="w-full text-orange-600 hover:text-white border border-orange-600 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-500 dark:text-white dark:hover:text-white dark:hover:bg-orange-700"
              >
                Login as Guest
              </button>
              <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
                <span>Don't have an account?</span>
                <Link
                  to="/signup"
                  className="text-orange-700 ml-4 hover:underline dark:text-orange-500"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </form>
        </div>
      </div>
    </>
  );
};
