import { takeEvery } from 'redux-saga/effects';
import {
  loadWebsocket,
  REQUEST_INITIALIZE_WS,
} from '../App/Actions';

export default function* mainSaga(dispatch) {
  yield takeEvery(REQUEST_INITIALIZE_WS, loadWebsocket, dispatch);
}
