import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SideBar, SuggestedUsers,PostSection } from '../../components';
import { getBookmarkedPosts } from '../../features';

export const Bookmark = () => {

  const { token } = useSelector(state => state.auth);
  const { data: bookmarks } = useSelector(state => state.bookmarks);
  const { data: posts } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkedPosts(token));
  }, [dispatch, token]);

  const bookmarkedPosts = posts.filter(post =>
    bookmarks.find(bookmarkedPost => bookmarkedPost._id === post._id)
  );

  return (
    <>
      <div className="flex justify-evenly text-white dark:bg-slate-900 h-screen">
        <SideBar />
        <div className="flex flex-col grow max-w-xl z-10">
          <h2 className="text-base p-2 font-medium">Bookmarks</h2>
          {bookmarks.length === 0 ? (
            <p className="text-black text-base m-auto dark:text-white">
              No posts in your Bookmark...
            </p>
          ) : (
            <PostSection posts={bookmarkedPosts} />
          )}
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
