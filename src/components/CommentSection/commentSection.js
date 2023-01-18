import React from 'react';
import { Comment } from '../../components';

export const CommentSection = ({ postId, comments }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <div className="relative mr-3 w-full">
            <input
              className="bg-white border border-gray-700 text-gray-900 text-sm rounded-lg outline-none focus:ring-orange-700 focus:border-orange-700 block w-full p-2 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-700 dark:focus:border-orange-700"
              placeholder="Add your comment ..."
              type="text"
              name="comment"
              required
            />
          </div>
          <div className="comment-action">
            <button className="text-white bg-orange-600  focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none ">
              Comment
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {comments.map(commentMsg => (
            <Comment
              key={commentMsg._id}
              postId={postId}
              commentMsg={commentMsg}
            />
          ))}
        </div>
      </div>
    </>
  );
};
