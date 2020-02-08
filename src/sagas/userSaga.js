import { takeEvery } from 'redux-saga/effects';
import getUserInfo, {
  loadUserStories,
  GET_USER_INFO,
  GET_USER_STORIES,
} from '../User/Actions';

import postReadNotification, {
  MARK_NOTIFICATION_READ
} from '../Navbar/Actions';

import changePassword, { CHANGE_PASSWORD } from '../Account/Security/Actions';
import { UPDATE_USER, updateUser } from '../Account/Profile/Actions';

export default function* userSaga() {
  yield takeEvery(GET_USER_INFO, getUserInfo);
  yield takeEvery(GET_USER_STORIES, loadUserStories);
  yield takeEvery(UPDATE_USER, updateUser);
  yield takeEvery(CHANGE_PASSWORD, changePassword);
  yield takeEvery(MARK_NOTIFICATION_READ, postReadNotification);
}
