import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { createPost } from '../../features';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const CreatePost = () => {
  const { user, token } = useSelector(state => state.auth);
  const [postData, setPostData] = useState({ content: '' });
  const { profileAvatar, username, fullName } = user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createPostHandler = async () => {
    const response = await dispatch(createPost({ postData, token }));

    if (response?.payload?.posts !== undefined) {
      toast.success('Your post has been created successfully!');
      setPostData({ content: '' });
    } else {
      toast.error(`${response.payload}`);
    }
  };

  return (
    <div className="grid grid-cols-[2rem_1fr] gap-2 items-start px-4 py-4 cursor-text bg-slate-800 rounded-[0.3rem]">
      <span className="cursor-pointer flex gap-3">
        <img
          src={profileAvatar}
          alt="arjun"
          className="h-8 w-8 sm:h-8 sm:w-8 rounded-full hover:cursor-pointer"
          onClick={e => {
            e.stopPropagation();
            navigate(`/profile/${username}`);
          }}
        />

        <div className="flex flex-col -mt-0.5">
          <span className="text-sm font-semibold">{fullName}</span>
          <p className="text-sm text-gray-400">@{username}</p>
        </div>
      </span>
      <form
        className="flex flex-col"
        onSubmit={e => {
          e.preventDefault();
          createPostHandler();
        }}
      >
        <textarea
          className="w-full break-all outline-none text-base mt-10 mb-1.5 placeholder:text-gray-400 bg-slate-800 border border-slate-800"
          placeholder="What's happening?"
          value={postData.content}
          onChange={e => {
            setPostData({ ...postData, content: e.target.value });
          }}
        ></textarea>
        <div className="ml-auto flex items-center gap-4">
          <label className="cursor-pointer text-lg">
            <input type="file" accept="image/*" className="hidden" />
            <i className="bi bi-card-image"></i>
          </label>
          <button
            type="submit"
            className="bg-orange-600 rounded-full py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Feed
          </button>
        </div>
      </form>
    </div>
  );
};
