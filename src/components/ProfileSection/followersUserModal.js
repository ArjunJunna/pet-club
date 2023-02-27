import { useNavigate } from 'react-router-dom';

export const FollowersUserModal = ({
  setShowFollowersUserModal,
  followers,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => setShowFollowersUserModal(false)}
      className="fixed inset-0 z-10 flex items-center justify-center bg-gray-400/[0.6]   dark:bg-gray-800/[0.6]"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="flex flex-col gap-3 rounded shadow-md p-4 bg-white dark:bg-gray-900 w-3/4 sm:w-2/3 md:1/3 lg:w-1/4"
      >
        <div className="flex items-center p-2">
          <p className="text-xl font-bold font-medium text-gray-900 dark:text-white">
            <i className="bi bi-people mr-2"></i>Followers
          </p>
          <button
            className="h-6 w-6 ml-auto rounded-full text-gray-400hover:bg-gray-600"
            onClick={() => setShowFollowersUserModal(false)}
          >
            <i className="bi bi-x-lg text-gray-900 dark:text-white"></i>
          </button>
        </div>
        <div className="flex flex-col gap-2 px-1">
          {followers.map(({ fullName, username, profileAvatar, _id }) => (
            <div className="flex gap-2 p-1" key={_id}>
              <img
                className="w-12 h-12 rounded-full self-start bg-gray-700 hover:cursor-pointer"
                src={profileAvatar}
                alt="User Avatar"
                onClick={() => {
                  navigate(`/profile/${username}`);
                }}
              />
              <div className="flex gap-4">
                <div className="name-credentials">
                  <p className="font-semibold text-gray-900 dark:text-white">{fullName}</p>
                  <p className="text-sm text-gray-400">@{username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
