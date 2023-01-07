import React from 'react'
import { SideBar, SuggestedUsers } from '../../components';

export const Bookmark = () => {
  return (
    <>
      <div className="flex justify-evenly text-white dark:bg-slate-900 h-screen">
        <SideBar />
        <div className="flex flex-col grow max-w-xl z-10">
          <h2 className="text-base p-2 font-medium">Bookmarks</h2>
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
}

