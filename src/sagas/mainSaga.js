import { takeEvery } from 'redux-saga/effects';
import {
  loadWebsocket,
  REQUEST_INITIALIZE_WS,
  REQUEST_CONFIG_DATA
} from '../App/Actions';

export default function* mainSaga(dispatch) {
  yield takeEvery(REQUEST_INITIALIZE_WS, loadWebsocket, dispatch);
}
