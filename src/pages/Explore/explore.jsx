import React from 'react';
import { useSelector } from 'react-redux';
import { SideBar, SuggestedUsers, PostSection,SortBar } from '../../components';
import { sortByDate } from '../../utilities/js/getSortByDate';

export const Explore = () => {
  const { data: posts,activeSort } = useSelector(state => state.posts);
 
  const sortedPosts = sortByDate(posts, activeSort);
  return (
    <>
      <div className="flex justify-evenly min-h-screen text-white dark:bg-slate-900">
        <SideBar />
        <div className="flex flex-col grow max-w-xl z-10">
          <SortBar />
          <PostSection posts={sortedPosts} />
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
