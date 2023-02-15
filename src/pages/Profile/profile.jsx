import {
  SideBar,
  SuggestedUsers,
  ProfileSection,
  PostSection,
} from '../../components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllUserPosts, getUser } from '../../features';

export const Profile = () => {
  const { data: users } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const { username } = useParams();
  const {
    profile: { data: profile },
    posts: { data: posts },
  } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);

  useEffect(() => {
    dispatch(getAllUserPosts(username));
  }, [dispatch, username]);
  return (
    <>
      <div className="flex justify-evenly text-white dark:bg-slate-900 h-screen">
        <SideBar />
        <div className="flex flex-col grow max-w-xl z-10">
          {profile === null ? (
            <p className="text-black text-xl m-auto dark:text-white">
              Oops! User doesn't exist
            </p>
          ) : (
            <ProfileSection profile={profile} />
          )}

          {posts === null || posts.length === 0 ? (
            <p className="text-black text-xl m-auto dark:text-white">
              Oops! You haven't posted anything yet...
            </p>
          ) : (
            <>
              <div className="flex flex-col gap-3">
                <PostSection posts={posts} />
              </div>
            </>
          )}
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
