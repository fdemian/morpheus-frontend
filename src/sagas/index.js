import { all, call } from 'redux-saga/effects';
import mainSaga from './mainSaga';
import storiesSaga from './storiesSaga';
import categoriesSaga from './categoriesSaga';
import authSaga from './authSaga';
import composerSaga from './composerSaga';
import profileSaga from './profileSaga';
import commentSaga from './commentSaga';
import userSaga from './userSaga';
import draftsSaga from './draftsSaga';

export default function* rootSaga(dispatch){
    yield all([
      call(mainSaga, dispatch),
      call(authSaga),
      call(storiesSaga),
      call(categoriesSaga),
      call(composerSaga),
      call(profileSaga),
      call(commentSaga),
      call(userSaga),
      call(draftsSaga)
    ]);
}
