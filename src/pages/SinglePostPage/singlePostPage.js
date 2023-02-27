import { SideBar, SuggestedUsers, Post,CommentSection } from '../../components';
import { getUserPost } from '../../features';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SinglePostPage = () => {
  const { data: post } = useSelector(state => state.post);
  
  const { data: posts } = useSelector(state => state.posts);
  

  const dispatch = useDispatch();

  const { postId } = useParams();


  useEffect(() => {
    dispatch(getUserPost(postId));
  }, [dispatch, postId, posts]);

  return (
    <>
      <div className="flex justify-evenly text-white dark:bg-slate-900 h-screen">
        <SideBar />
        <div className="flex flex-col grow max-w-xl z-10">
          <h2 className="text-gray-900 dark:text-white  text-base p-2 font-medium">
            Your Post
          </h2>
          <div className="flex flex-col gap-3">
            {post === null ? (
              <p className="text-black text-xl m-auto dark:text-white">
                No post to show here yet...
              </p>
            ) : (
              <>
                <Post post={post} />
                <CommentSection postId={postId} comments={post.comments} />
              </>
            )}
          </div>
        </div>
        <SuggestedUsers />
      </div>
    </>
  );
};
