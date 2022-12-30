import React from 'react';
import { SideBar, SuggestedUsers } from '../../components';
import {Link} from "react-router-dom";

export const Profile = () => {
  return (
    <>
      <div class="flex justify-evenly text-white dark:bg-slate-900 h-screen">
        <SideBar />
        <div class="flex flex-col grow max-w-xl z-10">
          <h2 class="text-base p-2 font-medium">Profile</h2>
          <Link to="/login" class="ml-auto">
            <button title="Logout">
              <i class="bi bi-box-arrow-right"></i>
            </button>
          </Link>
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
