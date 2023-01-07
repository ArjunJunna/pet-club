import React from 'react';

export const Post = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 rounded bg-slate-800 p-3">
        <img
          src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80"
          alt="arjun"
          className="h-12 w-12 sm:h-12 sm:w-12 rounded-full  hover:cursor-pointer"
        />
        <div className="flex flex-col flex-grow gap-1">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="name-credentials">
                <p className="font-semibold">Arjun R A</p>
                <p className="text-sm text-gray-400">@arjun_r_a</p>
              </div>
              <time className="font-light text-normal text-gray-500 text-sm">
                6 months ago
              </time>
            </div>
            <button className="text-gray-400 ml-auto pb-6">
              <i className="bi bi-three-dots-vertical"></i>
            </button>
          </div>
          <p className="text-sm">Nothing ever goes according to plan...</p>
          <div className="flex justify-between pt-1 text-gray-400">
            <button className="flex gap-1 dark:hover:text-green-400">
              <i className="bi bi-hand-thumbs-up"></i>
              <p className="ml-0.5">1</p>
            </button>
            <button className="flex gap-1 dark:hover:text-red-400">
              <i className="bi bi-hand-thumbs-down"></i>
            </button>
            <button className="flex gap-1 dark:hover:text-blue-400">
              <i className="bi bi-chat-square-text"></i>
              <p className="ml-0.5">1</p>
            </button>
            <button className="flex gap-1 dark:hover:text-orange-400">
              <i className="bi bi-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
