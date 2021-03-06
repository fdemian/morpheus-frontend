import Fetch from '../store/Fetch';

export const postComment = (storyId, commentParams) => {


  const { user, comment, anonymous } = commentParams;

  try {

    const _url = anonymous ? user.link : `/users/${user.id}`;
    const endpoint = `/api/stories/${storyId}/comments`;
    const jsonData = JSON.stringify({
     name: user.username,
     content: comment,
     avatar: user.avatar,
     url: _url,
     anonymous: anonymous
    });

    Fetch.POST(endpoint, [], jsonData);
  }
  catch(e) {
    throw(e);
  }
}

export default postComment;
