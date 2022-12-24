import React from 'react'
import {Navigate,Route,Routes} from 'react-router-dom';
import {Home,Profile,Explore,Bookmark} from "../pages"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default AppRoutes