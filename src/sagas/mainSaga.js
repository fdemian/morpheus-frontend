import { takeEvery } from 'redux-saga/effects';
import loadConfig, { REQUEST_CONFIG_DATA } from '../App/Actions';

export default function* mainSaga(dispatch) {
  yield takeEvery(REQUEST_CONFIG_DATA, loadConfig, dispatch);
}
