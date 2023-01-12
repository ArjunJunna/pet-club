import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Profile, Explore, Bookmark, Login,SignUp,SinglePostPage } from '../pages';
import { MockAPI,ResetScroll } from '../components';
import { PrivateRoute } from './PrivateRoute';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const { token } = useSelector(state => state.auth);
  return (
    <>
      <ResetScroll>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmarks" element={<Bookmark />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/mockapi" element={<MockAPI />} />
            <Route path="/post/:postId" element={<SinglePostPage />} />
          </Route>

          {!token ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/signup" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </ResetScroll>
    </>
  );
};

export default AppRoutes;
