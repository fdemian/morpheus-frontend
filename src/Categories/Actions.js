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

export function requestDeleteCategory(id){
    return {
      type: DELETE_CATEGORY,
      id: id
    };
}

export function* deleteCategory(action) {

  const state = yield select();
  const _token = state.session.token;
  const options = { token: _token };
  const endpoint = '/api/categories/' + action.id;

  try {
    const data = yield call(Fetch.DELETE, endpoint, [], null, options);
    yield put({type: DELETE_CATEGORY_OK, data: data});
  }
  catch(error) {
    yield put({type: DELETE_CATEGORY_FAILURE, error: error});
  }
}

export function requestCreateCategory(categoryName, categoryDescription){
    return {
      type: CREATE_CATEGORY,
      name: categoryName,
      description: categoryDescription
    }
}

export function* createCategory(action) {

  const state = yield select();
  const _token = state.session.token;
  const options = { token: _token };

  const jsonData = JSON.stringify({
     name: action.name,
     description: action.description
  });

  try {
    const data = yield call(Fetch.POST, '/api/categories', [], jsonData, options);
    yield put({type: CREATE_CATEGORY_OK, data: data});
  }
  catch(error) {
    yield put({type: CREATE_CATEGORY_FAILURE, error: error});
  }
}
