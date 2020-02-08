import Fetch from '../store/Fetch';
import { put, call } from 'redux-saga/effects';

export const GET_USER_INFO = 'GET_USER_INFO';
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const  RECEIVE_USER_INFO_FAILURE = 'RECEIVE_USER_INFO_FAILURE';

export const GET_USER_STORIES = 'GET_USER_STORIES';
export const RECEIVE_USER_STORIES = 'RECEIVE_USER_STORIES';
export const RECEIVE_USER_STORIES_FAILURE = 'RECEIVE_USER_STORIES_FAILURE';

export function requestUserInfo(userId){
  return {
    type: GET_USER_INFO,
    id: userId
  };
}

export function requestUserStories(userId){
  return {
    type: GET_USER_STORIES,
    id: userId
  };
}

export default function* getUserInfo(action) {
  try {
    const endpoint = '/api/users/' + action.id;
    const user = yield call(Fetch.GET, endpoint);
    yield put({type: RECEIVE_USER_INFO, data: user});
  }
  catch(error) {
    yield put({type: RECEIVE_USER_INFO_FAILURE, error: error})
  }
}

export function* loadUserStories(action) {
  try {
    const endpoint = '/api/users/' + action.id + '/stories';
    const userStories = yield call(Fetch.GET, endpoint);
    yield put({type: RECEIVE_USER_STORIES, data: userStories});
  }
  catch(error) {
    yield put({type: RECEIVE_USER_STORIES_FAILURE, error: error})
  }
}
