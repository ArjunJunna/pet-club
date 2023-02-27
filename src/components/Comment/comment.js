import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useOnClickOutside from '../../utilities/js/useOnClickOutside';
import { EditCommentModal } from './editCommentModal';
import { deletePostComment, editPostComment } from '../../features';

export const Comment = ({ postId, commentMsg, commentId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, profileAvatar, comment, fullName } = commentMsg;
  const [showCommentOptions, setShowCommentOptions] = useState(false);
  const [editCommentModal, setEditCommentModal] = useState(false);
  const { user, token } = useSelector(state => state.auth);
  const ref = useRef();
  const [commentData, setCommentData] = useState({ commentMsg });

  const handlerRef = () => {
    setShowCommentOptions(false);
  };
  useOnClickOutside(ref, handlerRef);

  const deleteCommentHandler = () => {
    dispatch(deletePostComment({ postId, commentId, token }));
  };

  const editCommentHandler = () => {
    dispatch(editPostComment({ postId, commentId, commentData, token }));
  };

  return (
    <>
      <div className="flex items-center gap-3 py-4 px-4 rounded relative bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700">
        <img
          className="w-10 h-10 rounded-full self-start dark:bg-gray-700 hover:cursor-pointer"
          src={profileAvatar}
          alt="User Avatar"
          onClick={() => {
            navigate(`/profile/${username}`);
          }}
        />

        <div className="flex flex-col gap-y-2 bg-white dark:bg-gray-800">
          <div className="name-credentials">
            <p className="font-semibold dark:text-white">{fullName}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{username}
            </p>
          </div>

          <p className="text-sm text-gray-800 font-normal bg-white dark:bg-gray-800 dark:text-white">
            {comment}
          </p>
        </div>

        {user.username === username && (
          <button
            className="text-gray-400 ml-auto pb-6 mb-6"
            onClick={() => setShowCommentOptions(true)}
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        )}
        {showCommentOptions ? (
          <div
            className="absolute top-10 right-6 text-sm flex flex-col gap-1.5 items-start bg-slate-800 rounded shadow-slate-900 shadow-xl  z-10 text-slate-100  text-center border border-slate-500"
            ref={ref}
          >
            <button
              className="cursor-pointer hover:bg-slate-700 py-2 w-32 rounded"
              onClick={() => setEditCommentModal(true)}
            >
              Edit Comment
            </button>

            <button
              className="cursor-pointer hover:bg-slate-700 py-2 w-32 rounded"
              onClick={e => {
                e.stopPropagation();
                deleteCommentHandler();
              }}
            >
              Delete Comment
            </button>
          </div>
        ) : null}
        {editCommentModal && (
          <EditCommentModal
            setEditCommentModal={setEditCommentModal}
            editCommentHandler={editCommentHandler}
            commentData={commentData}
            setCommentData={setCommentData}
            comment={comment}
          />
        )}
      </div>
    </>
  );
};
