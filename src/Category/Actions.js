import Fetch from '../store/Fetch';
import { put, call } from 'redux-saga/effects';

export const REQUEST_CATEGORY = 'REQUEST_CATEGORY';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORY_FAILURE = 'RECEIVE_CATEGORY_FAILURE';

export const REQUEST_CATEGORY_STORIES = 'REQUEST_CATEGORY_STORIES';
export const RECEIVE_CATEGORY_STORIES = 'RECEIVE_CATEGORY_STORIES';
export const RECEIVE_CATEGORY_STORIES_FAILURE = 'RECEIVE_CATEGORY_STORIES_FAILURE';

export function requestCategory(id){
    return {
      type: REQUEST_CATEGORY,
      id: id
    };
}

export default function* loadCategory(action) {

  try {
    const category = yield call(Fetch.GET, '/api/categories/'+ action.id);
    yield put({type: RECEIVE_CATEGORY, data: category});
    const storiesEndpoint = "/api/categories/" + category.id + "/1";

    try {
       const stories = yield call(Fetch.GET, storiesEndpoint);
       yield put({type: RECEIVE_CATEGORY_STORIES, data: stories});
    }
    catch(error) {
       yield put({type: RECEIVE_CATEGORY_STORIES_FAILURE, error: error});
    }

  }
  catch(error) {
    yield put({type: RECEIVE_CATEGORY_FAILURE, error: error});
  }
}
