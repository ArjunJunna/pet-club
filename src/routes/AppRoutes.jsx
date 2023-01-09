import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Profile, Explore, Bookmark, Login,SignUp } from '../pages';
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
            <Route path="/profile" element={<Profile />} />
            <Route path="/mockapi" element={<MockAPI />} />
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
