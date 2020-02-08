import { takeEvery } from 'redux-saga/effects';
import postComment, { POST_COMMENT } from '../CommentComposer/Actions';

export default function* commentSaga() {
  yield takeEvery(POST_COMMENT, postComment);
}
