import React from 'react';
import { useSelector } from 'react-redux';
import { getSuggestedUsers } from '../../utilities/js/getSuggestedUsers';
import { SuggestedUserCard } from './suggestedUserCard';

export const SuggestedUsers = () => {
  const { username, following } = useSelector(state => state.auth.user);
  const { data: users } = useSelector(state => state.users);
  const suggestedUsers = getSuggestedUsers(users, username, following);
  return (
    <>
      <div className="w-72 sticky top-20 h-full">
        <div className="flex flex-col h-auto bg-white dark:bg-slate-800 rounded p-3 tracking-wide gap-2">
          <h1 className="font-bold text-gray-900 dark:text-white">Who to Follow</h1>
          {suggestedUsers.slice(0, 5).map(user => (
            <SuggestedUserCard key={user._id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};
