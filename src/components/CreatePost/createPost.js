import React from 'react'

export const CreatePost = () => {
  return (
    <div className="grid grid-cols-[2rem_1fr] gap-2 items-start px-4 py-4 cursor-text bg-slate-800 rounded-[0.3rem]">
      <span className="cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80"
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

