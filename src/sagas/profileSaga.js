import { takeEvery } from 'redux-saga/effects';
import postFile,
{
  POST_AVATAR,
} from '../Account/Profile/Actions';

import {
  updateSecInfo,
  UPDATE_SEC_INFO
} from '../Account/Security/Actions';

export default function* authSaga() {
  yield takeEvery(POST_AVATAR, postFile);
  yield takeEvery(UPDATE_SEC_INFO, updateSecInfo)
}
