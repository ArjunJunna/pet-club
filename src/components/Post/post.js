import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  likePost,
  dislikePost,
  addPostToBookmarks,
  removePostFromBookmarks,
} from '../../features';

export const Post = ({ post }) => {
  const {
    username,
    content,
    fullName,
    profileAvatar,
    likes: { likeCount, likedBy, dislikedBy },
    comments,
    _id,
  } = post;
  const comment = comments.length;

  const { user, token } = useSelector(state => state.auth);
  const { data: bookmarks } = useSelector(state => state.bookmarks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const likeHandler = e => {
    e.stopPropagation();
    dispatch(likePost({ postId: _id, token }));
  };

  const dislikeHandler = e => {
    e.stopPropagation();
    dispatch(dislikePost({ postId: _id, token }));
  };

  const addPostToBookmarksHandler = e => {
    e.stopPropagation();
    dispatch(addPostToBookmarks({ postId: _id, token }));
  };

  const removePostFromBookmarksHandler = e => {
    e.stopPropagation();
    dispatch(removePostFromBookmarks({ postId: _id, token }));
  };

  return (
    <div
      className="flex flex-col gap-3 hover:cursor-pointer"
      onClick={() => navigate(`/post/${_id}`)}
    >
      <div className="flex gap-3 rounded bg-slate-800 p-3">
        <img
          src={profileAvatar}
          alt="profile avatar"
          className="h-12 w-12 sm:h-12 sm:w-12 rounded-full  hover:cursor-pointer"
          onClick={e => {
            e.stopPropagation();
            navigate(`/profile/${username}`);
          }}
        />
        <div className="flex flex-col flex-grow gap-1">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="name-credentials">
                <p className="font-semibold">{fullName}</p>
                <p className="text-sm text-gray-400">@{username}</p>
              </div>
              <time className="font-light text-normal pt-0.5 text-gray-500 text-sm">
                6 months ago
              </time>
            </div>
            <button className="text-gray-400 ml-auto pb-6">
              <i className="bi bi-three-dots-vertical"></i>
            </button>
          </div>
          <p className="text-sm">{content}</p>
          <div className="flex justify-between pt-1 text-gray-400">
            <button
              className={`flex gap-1 ${
                likedBy.find(({ username }) => username === user.username)
                  ? 'text-green-500 hover:text-green-500 dark:text-green-500 dark:hover:text-green-500'
                  : 'text-black hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500'
              }`}
              onClick={likeHandler}
            >
              {likedBy.find(({ username }) => username === user.username) ? (
                <i className="bi bi-hand-thumbs-up-fill"></i>
              ) : (
                <i className="bi bi-hand-thumbs-up"></i>
              )}

              <p className="ml-0.5">{likeCount}</p>
            </button>
            <button
              className={`flex gap-1 ${
                dislikedBy.find(({ username }) => username === user.username)
                  ? 'text-red-400 hover:text-red-400 dark:text-red-400 dark:hover:text-red-400'
                  : 'text-black hover:text-red-400 dark:text-gray-400 dark:hover:text-red-400'
              }`}
              onClick={dislikeHandler}
            >
              {dislikedBy.find(({ username }) => username === user.username) ? (
                <i className="bi bi-hand-thumbs-down-fill"></i>
              ) : (
                <i className="bi bi-hand-thumbs-down"></i>
              )}
            </button>
            <button className="flex gap-1 dark:hover:text-blue-400">
              <i className="bi bi-chat-square-text"></i>
              <p className="ml-0.5">{comment}</p>
            </button>
            {bookmarks.find(post => post._id === _id) ? (
              <button
                className="flex gap-1 text-orange-600 dark:hover:text-orange-400"
                onClick={removePostFromBookmarksHandler}
              >
                <i className="bi bi-bookmark-check-fill"></i>
              </button>
            ) : (
              <button
                className="flex gap-1 dark:hover:text-orange-400"
                onClick={addPostToBookmarksHandler}
              >
                <i className="bi bi-bookmark"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
