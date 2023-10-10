import React from 'react';
import {
  SideBar,
  SuggestedUsers,
  PostSection,
  CreatePost,
  SortBar
} from '../../components';
import { useSelector } from 'react-redux';
import { giveFeedPosts } from '../../utilities/js/getFeedPosts';
import { sortByDate } from '../../utilities/js/getSortByDate';

export const Home = () => {
  const { data: posts,activeSort } = useSelector(state => state.posts);
  const { following, username } = useSelector(state => state?.auth?.user);

  const feedPosts = giveFeedPosts(posts, following, username);
  
  const sortedPosts = sortByDate(feedPosts, activeSort);
  return (
    <>
      <div className="flex justify-evenly min-h-screen text-gray-100 dark:text-white dark:bg-slate-900">
        <SideBar />
        <div className="flex flex-col grow max-w-xl z-10">
          <h2 className="text-base p-2 font-medium text-gray-900 dark:text-white">Home</h2>
          <CreatePost />
          <SortBar/>
          <PostSection posts={sortedPosts} />
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
