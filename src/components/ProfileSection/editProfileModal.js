import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUserDetails } from '../../features';


export const EditProfileModal = ({
  setIsEditProfileModal,
  fullName,
  profileAvatar,
  username,
  bio,
  website,
}) => {
  const [userData, setUserData] = useState('');
   const { token } = useSelector(state => state.auth);

   const dispatch = useDispatch();

  

  const editProfileHandler=()=>{
    dispatch(editUserDetails({userData,token}));
  }

  return (
    <>
      <div
        className="fixed z-40 flex justify-center items-center inset-0 bg-slate-800/[0.7]"
        onClick={() => setIsEditProfileModal(false)}
      >
        <div
          className="flex flex-col rounded gap-3 shadow-md bg-gray-900 p-4 mt-16 w-3/4 sm:w-2/3 md:1/3 lg:w-1/4"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center p-2">
            <p className="text-xl font-bold text-white">
              <i className="bi bi-pen mr-2"></i>Edit Profile
            </p>
            <button
              className="h-6 w-6 ml-auto rounded-full text-gray-400hover:bg-gray-600"
              onClick={() => setIsEditProfileModal(false)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="font-semibold text-sm text-gray-300"
              >
                Fullname
              </label>
              <input
                type="name"
                value={fullName}
                className="text-gray-300 p-2 w-full rounded-lg bg-gray-900 border border-gray-600"
                disabled
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="font-semibold text-sm  text-gray-300"
              >
                Username
              </label>
              <input
                type="name"
                value={username}
                className="text-gray-300 p-2 w-full rounded-lg bg-gray-900 border border-gray-600"
                disabled
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="avatar"
                className="font-semibold text-sm  text-gray-300"
              >
                Avatar URL
              </label>
              <input
                type="name"
                value={profileAvatar}
                className="text-gray-300 p-2 w-full rounded-lg bg-gray-900 border border-gray-600"
                disabled
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="bio"
                className="font-semibold text-sm  text-gray-300"
              >
                Bio
              </label>
              <input
                type="text"
                defaultValue={bio}
                className="text-gray-300 p-2 w-full rounded-lg bg-gray-900 border border-gray-600 outline-none focus:border-gray-300"
                onChange={e =>
                  setUserData({ ...userData, bio: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="website"
                className="font-semibold text-sm  text-gray-300"
              >
                Website
              </label>
              <input
                type="url"
                defaultValue={website}
                className="text-gray-300 p-2 w-full rounded-lg bg-gray-900 border border-gray-600 outline-none focus:border-gray-300"
                onChange={e =>
                  setUserData({ ...userData, website: e.target.value })
                }
                required
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-white  dark:hover:bg-orange-800"
                onClick={() => setIsEditProfileModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-orange-600 rounded-lg py-1 px-5 font-medium hover:bg-orange-800"
                onClick={() => {
                  editProfileHandler();
                  setIsEditProfileModal(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
