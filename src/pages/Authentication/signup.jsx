import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpHandler } from '../../features/auth/authSlice';

export const SignUp = () => {
  const dispatch = useDispatch();

  const [signup, setSignup] = useState({
    input: {},
    pwdMatch: true,
  });

  const signupInputHandler = e => {
    const { name, value } = e.target;
    if (name === 'confirmPwd') {
      setSignup({
        ...signup,
        input: { ...signup.input, [name]: value },
        pwdMatch: value === signup.input.password ? true : false,
      });
    } else {
      setSignup({
        ...signup,
        input: { ...signup.input, [name]: value },
      });
    }
  };

  return (
    <>
      <div className="h-[30rem] mt-4">
        <div className="m-auto p-4 w-fit rounded-lg border border-gray-200 sm:p-6 sm:w-96 lg:p-8 bg-gray-200/40 dark:bg-slate-800 dark:border-gray-700">
          <form
            className="space-y-2"
            onSubmit={() => {
              dispatch(signUpHandler({ signup, setSignup }));
              console.log('clicked submit');
              console.log(signup.input);
            }}
          >
            <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">
              Sign Up
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="e.g. Tom Cruise"
                value={signup.input.fullName || ''}
                onChange={signupInputHandler}
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="e.g. tomcruise"
                value={signup.input.username || ''}
                onChange={signupInputHandler}
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
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                minLength="8"
                value={signup.input.password || ''}
                onChange={signupInputHandler}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                minLength="8"
                name="confirmPwd"
                value={signup.input.confirmPwd || ''}
                onChange={signupInputHandler}
                required
              />
            </div>
            <div>
              {!signup.pwdMatch ? (
                <div className="text-xs text-red-600">
                  Passwords do not match
                </div>
              ) : null}
            </div>
            <button
              className="w-full text-white bg-orange-600 hover:bg-orange-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700"
              type="submit"
            >
              Create New Account
            </button>

            <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
              <span>Already have an account?</span>
              <Link
                to="/login"
                className="text-orange-700 ml-4 hover:underline dark:text-orange-500"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
