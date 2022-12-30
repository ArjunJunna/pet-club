import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Profile, Explore, Bookmark, Login,SignUp } from '../pages';
import { MockAPI } from '../components';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/mockapi" element={<MockAPI />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
