import Fetch from '../store/Fetch';
import { select, put, call } from 'redux-saga/effects';
//import { LOGOUT_SUCCESS } from '../Authentication/Actions';

export const POST_COMMENT = 'POST_COMMENT';
export const POST_COMMENT_OK = 'POST_COMMENT_OK';
export const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILURE';

export function requestPostComment(commentContent){
  return {
     type: POST_COMMENT,
     content: commentContent
  };
}

export default function* postComment(action) {

  const state = yield select();
  const { session } = state;
  const { user } = session;
  const storyId = state.story.id;
  const _name = user.username;
  const _avatar = user.avatar;
  const _content = action.content;
  const _url = user.link;
  const _token = session.token;
  const endpoint = "/api/stories/" + storyId + "/comments";

  const jsonData = JSON.stringify({
   name: _name,
   content: _content,
   avatar: _avatar,
   url: _url,
   anonymous: user.email === null
  });

  try {
   const data = yield call(Fetch.POST, endpoint, [], jsonData, {token: _token });
   yield put({type: POST_COMMENT_OK, data: data});

  }
  catch(error) {
    yield put({type: POST_COMMENT_FAILURE, error: error});
  }
}
