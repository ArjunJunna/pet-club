import { useNavigate } from 'react-router-dom';

const EditPostModal = ({
  setEditPostModal,
  fullName,
  username,
  profileAvatar,
  content,
  postData,
  setPostData,
  editPostHandler,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => setEditPostModal(false)}
      className="fixed inset-0 z-10 flex items-center justify-center bg-gray-400/[0.6]  dark:bg-gray-800/[0.6]"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="flex flex-col gap-3 rounded shadow-md p-4 bg-white dark:bg-gray-900 w-3/4 sm:w-2/3 md:1/3 lg:w-1/4"
      >
        <div className="flex items-center p-2">
          <p className="text-xl font-bold font-medium text-gray-900 dark:text-white">
            <i className="bi bi-pen mr-2"></i>Edit Post
          </p>
          <button
            className="h-6 w-6 ml-auto rounded-full text-gray-400hover:bg-gray-600"
            onClick={() => setEditPostModal(false)}
          >
            <i className="bi bi-x-lg  text-gray-900 dark:text-white"></i>
          </button>
        </div>
        <div className="flex gap-2 px-1">
          <img
            className="w-11 h-11 rounded-full self-startbg-gray-700 hover:cursor-pointer"
            src={
              profileAvatar
            }
            alt="User Avatar"
            onClick={() => {
              navigate(`/profile/${username}`);
            }}
          />
          <div className="flex gap-4">
            <div className="name-credentials">
              <p className="font-semibold dark:text-white text-gray-900">{fullName}</p>
              <p className="text-sm text-gray-400">@{username}</p>
            </div>
          </div>
        </div>
        <div className="rounded border py-2 px-2 border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-900">
          <textarea
            id="editor"
            rows="5"
            className="block h-24 px-0 w-full text-base  border-0 outline-none  bg-white text-black dark:bg-gray-900  dark:text-white "
            placeholder="What's happening?"
            defaultValue={content}
            onChange={e => {
              setPostData({ ...postData, content: e.target.value });
            }}
            required
          ></textarea>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5  text-gray-900 hover:text-white dark:text-white dark:hover:text-white hover:bg-orange-800"
            onClick={() => setEditPostModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-orange-600 rounded-lg py-1 px-5 font-medium hover:bg-orange-800"
            onClick={() => {
              editPostHandler();
              setEditPostModal(false);
              navigate('/');
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export { EditPostModal };
