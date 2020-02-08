import { takeEvery } from 'redux-saga/effects';
import loadStories, {
  editStory,
  deleteStory,
  GET_STORIES,
  EDIT_STORY,
  DELETE_STORY
} from '../Stories/Actions';

import loadStory, { REQUEST_STORY } from '../Story/Actions';

export default function* storiesSaga() {
  yield takeEvery(GET_STORIES, loadStories);
  yield takeEvery(EDIT_STORY, editStory);
  yield takeEvery(DELETE_STORY, deleteStory);
  yield takeEvery(REQUEST_STORY, loadStory);
}
