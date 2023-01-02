import React from 'react';
import { SideBar, SuggestedUsers } from '../../components';
import {Link} from "react-router-dom";
import { logoutHandler } from '../../features/auth/authSlice';
import {useDispatch} from 'react-redux';

export const Profile = () => {
  const dispatch=useDispatch();
  return (
    <>
      <div className="flex justify-evenly text-white dark:bg-slate-900 h-screen">
        <SideBar />
        <div className="flex flex-col grow max-w-xl z-10">
          <h2 className="text-base p-2 font-medium">Profile</h2>
          <Link to="/login" className="ml-auto">
            <button
              title="Logout"
              onClick={() => {
                dispatch(logoutHandler());
              }}
            >
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </Link>
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
