import { takeEvery } from 'redux-saga/effects';
import loadConfig, {
  loadWebsocket,
  REQUEST_INITIALIZE_WS,
  REQUEST_CONFIG_DATA
} from '../App/Actions';

export default function* mainSaga(dispatch) {
  yield takeEvery(REQUEST_CONFIG_DATA, loadConfig, dispatch);
  yield takeEvery(REQUEST_INITIALIZE_WS, loadWebsocket, dispatch);
}
