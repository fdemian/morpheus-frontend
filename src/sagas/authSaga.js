import { takeEvery } from 'redux-saga/effects';
import signIn,
{
  AUTH_START,
  LOGOUT_START,
  signOut
} from '../Authentication/Actions';

import { register, REGISTER_START } from '../Login2/Actions';

export default function* authSaga() {
  yield takeEvery(AUTH_START, signIn);
  yield takeEvery(LOGOUT_START, signOut);
  yield takeEvery(REGISTER_START, register);
}
