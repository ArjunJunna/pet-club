import React from 'react';
import { SideBar, SuggestedUsers,PostSection } from '../../components';
import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div class="flex justify-evenly text-white dark:bg-slate-900">
        <SideBar />
        <div class="flex flex-col grow max-w-xl z-10">
          <h2 class="text-base p-2 font-medium">Home</h2>
          <div class="grid grid-cols-[2rem_1fr] gap-2 items-start px-4 py-4 cursor-text bg-slate-800 rounded-[0.3rem]">
            <span class="cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80"
                alt="arjun"
                class="h-8 w-8 sm:h-8 sm:w-8 rounded-full hover:cursor-pointer"
              />
            </span>
            <form class="flex flex-col">
              <div
                role="textbox"
                contenteditable="true"
                class="w-full break-all outline-none mt-1.5 placeholder:text-red-400"
                placeholder="What's happening?"
              ></div>
              <div class="ml-auto flex items-center gap-4">
                <label class="cursor-pointer text-lg">
                  <input type="file" accept="image/*" class="hidden" />
                  <i class="bi bi-card-image"></i>
                </label>
                <button
                  type="submit"
                  class="bg-orange-600 rounded-full py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  Feed
                </button>
              </div>
            </form>
          </div>
          <div class="text-base p-2 font-medium flex justify-between">
            <div class="inline">Latest</div>
            <button>
              <i class="bi bi-sliders"></i>
            </button>
          </div>
          <PostSection/>
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
