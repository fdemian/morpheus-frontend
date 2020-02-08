import Fetch from '../../store/Fetch';
import { select, put, call } from 'redux-saga/effects';

export const POST_AVATAR = 'POST_AVATAR';
export const POST_AVATAR_SUCESS = 'POST_AVATAR_SUCESS';
export const POST_AVATAR_FAILURE = 'POST_AVATAR_FAILURE';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCESS = 'UPDATE_USER_SUCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export function requestPostAvatar(formData){
    return {
      type: POST_AVATAR,
      formData: formData
    }
}

export function requestUpdateUser(user){
  return {
    type: UPDATE_USER,
    user: user
  }
}

export default function* postFile(action) {
   const state = yield select();
   const { formData } = action;
   const token = state.session.token;
   const userName = state.session.user.username;
   const options = { token: token, isFile: true };
   const endpoint = "/api/uploads/" + userName;

   try {
      const data = yield call(Fetch.POST, endpoint, [], formData, options);
      yield put({type: POST_AVATAR_SUCESS, avatar: data});
   }
   catch(error){
      yield put({type: UPDATE_USER_FAILURE, error: error});
   }
}

export function * updateUser(action){
  const { user }  = action;

  const state = yield select();
  const token = state.session.token;
  const options = { token: token, isFile: false };
  const endpoint = "/api/users/" + user.id;

  try {
     const data = yield call(Fetch.PUT, endpoint, [], user, options);
     yield put({type: UPDATE_USER_SUCESS, data: data.user});
  }
  catch(error){
    yield put({type: UPDATE_USER_FAILURE});
  }
}
