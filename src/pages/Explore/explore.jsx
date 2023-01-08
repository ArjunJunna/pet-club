import React from 'react';
import { useSelector } from 'react-redux';
import { SideBar, SuggestedUsers, PostSection } from '../../components';

export const Explore = () => {
  const { data: posts } = useSelector(state => state.posts);
  return (
    <>
      <div className="flex justify-evenly text-white dark:bg-slate-900">
        <SideBar />
        <div className="flex flex-col grow max-w-xl z-10">
          <h2 className="text-base p-2 font-medium">Explore</h2>

          <PostSection posts={posts} />
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
