import React from 'react'
import { SideBar, SuggestedUsers } from '../../components';

export const Explore = () => {
  return (
    <>
      <div class="flex justify-evenly text-white dark:bg-slate-900 h-screen">
        <SideBar />
        <div class="flex flex-col grow max-w-xl z-10">
          <h2 class="text-base p-2 font-medium">Explore</h2>
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
}

