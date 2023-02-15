import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  likePost,
  dislikePost,
  addPostToBookmarks,
  removePostFromBookmarks,
  editPost,
  deletePost,
} from '../../features';
import Moment from 'react-moment';
import { EditPostModal } from './editPostModal';

export const Post = ({ post }) => {
  const {
    username,
    content,
    fullName,
    profileAvatar,
    updatedAt,
    likes: { likeCount, likedBy, dislikedBy },
    comments,
    _id,
  } = post;

  const comment = comments.length;

  const { user, token } = useSelector(state => state.auth);
  const { data: bookmarks } = useSelector(state => state.bookmarks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showPostOptions, setShowPostOptions] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);
  const [postData, setPostData] = useState({ content });

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

  const editPostHandler = e => {
    dispatch(editPost({ postId: _id, postData, token }));
  };

  const deletePostHandler = e => {
    if (pathname === '/bookmarks') {
      dispatch(removePostFromBookmarks({ postId: _id, token }));
    }
    dispatch(deletePost({ postId: _id, token }));
  };

  return (
    <div className="flex flex-col gap-3 hover:cursor-pointer relative">
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
              <Moment
                fromNow
                className="font-light text-normal pt-0.5 text-gray-500 text-sm"
              >
                {updatedAt}
              </Moment>
            </div>
            {user.username === username && (
              <button
                className="text-gray-400 ml-auto pb-6"
                onClick={() => setShowPostOptions(prev => !prev)}
              >
                <i className="bi bi-three-dots-vertical"></i>
              </button>
            )}

            {showPostOptions ? (
              <div className="absolute top-10 right-6 text-sm flex flex-col gap-1.5 items-start bg-slate-800 rounded shadow-slate-900 shadow-xl  z-10 text-slate-100  text-center border border-slate-500">
                <button
                  className="cursor-pointer hover:bg-slate-700 py-2 w-28 rounded"
                  onClick={() => setEditPostModal(true)}
                >
                  Edit Post
                </button>

                <button
                  className="cursor-pointer hover:bg-slate-700 py-2 w-28 rounded"
                  onClick={() => deletePostHandler()}
                >
                  Delete Post
                </button>
              </div>
            ) : null}
          </div>
          <p className="text-sm" onClick={() => navigate(`/post/${_id}`)}>
            {content}
          </p>
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
      {editPostModal && (
        <EditPostModal
          setEditPostModal={setEditPostModal}
          postData={postData}
          setPostData={setPostData}
          editPostHandler={editPostHandler}
          {...post}
        />
      )}
    </div>
  );
};
