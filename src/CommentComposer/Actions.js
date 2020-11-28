import Fetch from '../store/Fetch';

export const postComment = (storyId, commentParams) => {


  const { user, comment } = commentParams;

  try {

    const _url = `/users/${user.id}`;
    const endpoint = `/api/stories/${storyId}/comments`;
    const jsonData = JSON.stringify({
     name: user.username,
     content: comment,
     avatar: user.avatar,
     url: _url,
     anonymous: false
    });

    console.clear();
    console.log(endpoint);

    Fetch.POST(endpoint, [], jsonData);
  }
  catch(e) {
    console.log(e);
    console.log("Error!");
  }
}

export default postComment;
