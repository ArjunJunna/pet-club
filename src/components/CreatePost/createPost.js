import React from 'react'
import { useSelector } from 'react-redux';

export const CreatePost = () => {
    const { user } = useSelector(state => state.auth);
    const { profileAvatar } = user;
   console.log("user:",user);
   console.log(profileAvatar);
  return (
    <div className="grid grid-cols-[2rem_1fr] gap-2 items-start px-4 py-4 cursor-text bg-slate-800 rounded-[0.3rem]">
      <span className="cursor-pointer">
        <img
          src={profileAvatar}
          alt="arjun"
          className="h-8 w-8 sm:h-8 sm:w-8 rounded-full hover:cursor-pointer"
        />
      </span>
      <form className="flex flex-col">
        <div
          role="textbox"
          contentEditable="true"
          className="w-full break-all outline-none mt-1.5 placeholder:text-red-400"
          placeholder="What's happening?"
        ></div>
        <div className="ml-auto flex items-center gap-4">
          <label className="cursor-pointer text-lg">
            <input type="file" accept="image/*" className="hidden" />
            <i className="bi bi-card-image"></i>
          </label>
          <button
            type="submit"
            className="bg-orange-600 rounded-full py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Feed
          </button>
        </div>
      </form>
    </div>
  );
}

