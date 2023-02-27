import axios from 'axios';

const getAllPostCommentsService=async(postId)=>{
    const response = await axios.get(`/api/comments/${postId}`);
    return response;
}

const addPostCommentService=async(postId,commentData,token)=>{
    const response = await axios.post(`/api/comments/add/${postId}`,{commentData},{
        headers:{
            authorization:token,
        }
    });
    
    return response;
}

const editPostCommentService=async(postId,commentId,token,commentData)=>{
    const response = await axios.post(`/api/comments/edit/${postId}/${commentId}`,{commentData},{
        headers:{
            authorization:token,
        }
    });
    return response;
}

const deletePostCommentService = async (postId, commentId, token) => {
  const response = await axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: token } }
  );
  return response;
};


export {getAllPostCommentsService,addPostCommentService,editPostCommentService,deletePostCommentService};