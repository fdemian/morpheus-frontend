import { takeEvery } from 'redux-saga/effects';
import loadDrafts, {
  deleteDraft,
  editDraft,
  getDraft,
  GET_DRAFTS,
  EDIT_DRAFT,
  DELETE_DRAFT,
  GET_DRAFT
} from '../Drafts/Actions';

export default function* draftsSaga() {
  yield takeEvery(GET_DRAFTS, loadDrafts);
  yield takeEvery(EDIT_DRAFT, editDraft);
  yield takeEvery(DELETE_DRAFT, deleteDraft);
  yield takeEvery(GET_DRAFT, getDraft);
}
