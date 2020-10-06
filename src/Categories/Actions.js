import Fetch from '../store/Fetch';
import { select, put, call } from 'redux-saga/effects';

export const GET_CATEGORIES= 'GET_CATEGORIES';
export const RECEIVE_CATEGORIES_OK = 'RECEIVE_CATEGORIES_OK';
export const RECEIVE_CATEGORIES_FAILURE = 'RECEIVE_CATEGORIES_FAILURE';

export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const DELETE_CATEGORY_OK = 'DELETE_CATEGORY_OK';
export const DELETE_CATEGORY_FAILURE = 'DELETE_CATEGORY_FAILURE';

export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const CREATE_CATEGORY_OK = 'CREATE_CATEGORY_OK';
export const CREATE_CATEGORY_FAILURE = 'CREATE_CATEGORY_FAILURE';

export function requestCategories(){
  return {
    type: GET_CATEGORIES
  };
}

export default function* loadCategories() {
  try {
    const categories = yield call(Fetch.GET, '/api/categories');
    yield put({type: RECEIVE_CATEGORIES_OK, data: categories});
  }
  catch(error) {
    yield put({type: RECEIVE_CATEGORIES_FAILURE, error: error});
  }
}
