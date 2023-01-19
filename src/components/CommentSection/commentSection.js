import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostComment } from '../../features';
import {toast} from 'react-toastify';
import { Comment } from '../../components';

export const CommentSection = ({ postId, comments }) => {
  const [commentData, setCommentData] = useState({ comment: '' });
  
  const {token,user: { fullName,username, profileAvatar },} = useSelector(state => state.auth);
  const dispatch = useDispatch();

 const addCommentHandler = async () => {
   if (commentData.comment !== '') {
     const response = await dispatch(
       addPostComment({
         postId,
         commentData: {
           fullName,
           username,
           profileAvatar,
           comment: commentData.comment,
         },
         token,
       })
     );
     console.log('from: ',response);
     if (response?.payload?.comments) {
      console.log('commented')
       toast.success('Your comment has been created successfully!');
       setCommentData({ ...commentData, comment: '' });
     }
   } else {
     toast.error('Oops! Something went wrong...');
   }
 };


  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <div className="relative mr-3 w-full">
            <input
              className="bg-white border border-gray-700 text-gray-900 text-sm rounded-lg outline-none focus:ring-orange-700 focus:border-orange-700 block w-full p-2 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-700 dark:focus:border-orange-700"
              placeholder="Add your comment ..."
              type="text"
              name="comment"
              value={commentData.comment}
              onChange={e =>
                setCommentData({ ...commentData, comment: e.target.value })
              }
              required
            />
          </div>
          <div className="comment-action">
            <button
              className="text-white bg-orange-600  font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none "
              onClick={addCommentHandler}
            >
              Comment
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {comments.map(commentMsg => (
            <Comment
              key={commentMsg._id}
              postId={postId}
              commentMsg={commentMsg}
            />
          ))}
        </div>
      </div>
    </>
  );
};
