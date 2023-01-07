import React from 'react';
import { SideBar, SuggestedUsers,PostSection,CreatePost } from '../../components';
import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div class="flex justify-evenly text-white dark:bg-slate-900">
        <SideBar />
        <div class="flex flex-col grow max-w-xl z-10">
          <h2 class="text-base p-2 font-medium">Home</h2>
          <CreatePost/>
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
