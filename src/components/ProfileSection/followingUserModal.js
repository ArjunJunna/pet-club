import { useNavigate } from 'react-router-dom';

export const FollowingUserModal = ({
  setShowFollowingUserModal,
  following,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => setShowFollowingUserModal(false)}
      className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800/[0.7]"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="flex flex-col gap-3 rounded shadow-md p-4 bg-gray-900 w-3/4 sm:w-2/3 md:1/3 lg:w-1/4"
      >
        <div className="flex items-center p-2">
          <p className="text-xl font-bold font-medium text-white">
            <i className="bi bi-people mr-2"></i>Followers
          </p>
          <button
            className="h-6 w-6 ml-auto rounded-full text-gray-400hover:bg-gray-600"
            onClick={() => setShowFollowingUserModal(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="flex flex-col gap-2 px-1">
          {following.map(({ fullName, username, profileAvatar, _id }) => (
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
                  <p className="font-semibold text-white">{fullName}</p>
                  <p className="text-sm text-gray-400">
                    @{username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
