import { takeEvery } from 'redux-saga/effects';
import loadCategories, {
   deleteCategory,
   createCategory,
   GET_CATEGORIES,
   DELETE_CATEGORY,
   CREATE_CATEGORY
} from '../Categories/Actions';

import loadCategory, { REQUEST_CATEGORY } from '../Category/Actions';


export default function* categoriesSaga() {
  yield takeEvery(GET_CATEGORIES, loadCategories);
  yield takeEvery(DELETE_CATEGORY, deleteCategory);
  yield takeEvery(CREATE_CATEGORY, createCategory);
  yield takeEvery(REQUEST_CATEGORY, loadCategory);
}
