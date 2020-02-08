import { takeEvery } from 'redux-saga/effects';
import postNewStory, {editStory, EDIT_STORY, SEND_STORY } from '../Composer/Actions';

export default function* composerSaga() {
  yield takeEvery(SEND_STORY, postNewStory);
  yield takeEvery(EDIT_STORY, editStory);
}
