import Fetch from '../store/Fetch';
import { put, call } from 'redux-saga/effects';

export const REQUEST_STORY = 'REQUEST_STORY';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const RECEIVE_STORY_FAILURE = 'RECEIVE_STORY_FAILURE';

export const REGISTER_TEMP_USER = 'REGISTER_TEMP_USER';

export default function* loadStory(action) {
  try {
    const endpoint = "/api/stories?id=" + action.Id;
    const story = yield call(Fetch.GET, endpoint);
    yield put({type: RECEIVE_STORY, data: story});
  }
  catch(error) {
    yield put({type: RECEIVE_STORY_FAILURE, error: error})
  }
}
