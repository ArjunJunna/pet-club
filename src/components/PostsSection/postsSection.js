import React from 'react';
import { Post } from '../../components';

export const PostSection = ({ posts }) => {
  return (
    <div className="flex flex-col gap-3 max-md:mx-3">
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};
