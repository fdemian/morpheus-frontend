import { all, call } from 'redux-saga/effects';
import mainSaga from './mainSaga';
import composerSaga from './composerSaga';
import commentSaga from './commentSaga';
import userSaga from './userSaga';

export default function* rootSaga(dispatch){
    yield all([
      call(mainSaga, dispatch),
      call(composerSaga),
      call(commentSaga),
      call(userSaga)
    ]);
}
