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

export const Home = () => {
  const { data: posts } = useSelector(state => state.posts);
  const {
    user: { following, username },
  } = useSelector(state => state.auth);

  const feedPosts = giveFeedPosts(posts, following, username);
  
  return (
    <>
      <div className="flex justify-evenly text-white dark:bg-slate-900">
        <SideBar />
        <div className="flex flex-col grow max-w-xl z-10">
          <h2 className="text-base p-2 font-medium">Home</h2>
          <CreatePost />
          <SortBar/>
          <PostSection posts={feedPosts} />
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
