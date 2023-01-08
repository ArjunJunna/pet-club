import React from 'react';
import { Post } from '../../components';

export const PostSection = ({ posts}) => {
    console.log(posts);
  return (
    <div className="flex flex-col gap-3">
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};
