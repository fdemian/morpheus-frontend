import Fetch from '../store/Fetch';

const postComment = (storyId, commentParams) => {

  const { user, comment, token } = commentParams;

  try {
    const _name = user.username;
    const _avatar = user.avatar;
    const _isAnonymous = user.email === null;
    const _url = user.link;
    const endpoint = `/api/stories/${storyId}/comments`;

    const jsonData = JSON.stringify({
     name: _name,
     content: comment,
     avatar: _avatar,
     url: _url,
     anonymous: _isAnonymous
    });

    Fetch.POST(endpoint, [], jsonData, {token: token });
  }
  catch {
    console.log("Error!");
  }
}

export default postComment;
