import Fetch from '../store/Fetch';
import { put, call } from 'redux-saga/effects';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export function startAuth(type, token, redirectURL, username, password){

  const signInData = {
    type: type,
    token: token,
    redirectURL: redirectURL,
    username: username,
    password: password
  }

  return { type: AUTH_START, data: signInData };
}

export function logout(){
  return { type: LOGOUT_START };
}

export default function* signIn(action){

  const { data } = action;
  const endpoint = "/api/auth";

  const jsonData = JSON.stringify({
     code: data.token,
     type: data.type,
     redirectURL: data.redirectURL,
     username: data.username,
     password: data.password
  });

  try{
    const data = yield call(Fetch.POST, endpoint, [], jsonData, null);
    yield put({type: AUTH_SUCCESS, data: data});
  }
  catch(error){
    yield put({type: AUTH_FAILURE, data: {message: error} });
  }
}

export function* signOut() {
  try{
    yield put({type: LOGOUT_SUCCESS});
  }
  catch(error){
    yield put({type: LOGOUT_FAILURE});
  }
}
