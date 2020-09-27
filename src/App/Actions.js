import Fetch from '../store/Fetch';
import { put, call, select, cancelled } from 'redux-saga/effects';

export const REQUEST_CONFIG_DATA = 'REQUEST_CONFIG_DATA';
export const RECEIVE_CONFIG_DATA = 'RECEIVE_CONFIG_DATA';
export const RECEIVE_CONFIG_FAILURE = 'RECEIVE_CONFIG_FAILURE';

export const REQUEST_INITIALIZE_WS = 'REQUEST_INITIALIZE_WS';
export const INITIALIZE_WEBSOCKET = 'INITIALIZE_WEBSOCKET';
export const INITIALIZE_WEBSOCKET_SUCCESS = 'INITIALIZE_WEBSOCKET_SUCCESS';
export const INITIALIZE_WEBSOCKET_FAILURE = 'INITIALIZE_WEBSOCKET_FAILURE';

export const REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS';
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';
export const REQUEST_NOTIFICATIONS_FAILURE = 'REQUEST_NOTIFICATIONS_FAILURE';

export const RECEIVE_APP_OPTIONS = 'RECEIVE_APP_OPTIONS';
export const RECEIVE_APP_OPTIONS_FAILURE = 'RECEIVE_APP_OPTIONS_FAILURE';

export const NEW_NOTIFICATION = 'NEW_NOTIFICATION';

// WSS helpers.
const IS_DEV = process.env.NODE_ENV === "development";
const LOCAL_URL = "localhost:8888/";
const PROD_URL = window.location.href.split("//")[1];
const wssBaseURL = IS_DEV ? LOCAL_URL : PROD_URL;

const wsOptions = {
  protocol: 'wss://',
  base: wssBaseURL,
  path: 'api/notifications'
};

const wssURL = wsOptions.protocol + wsOptions.base + wsOptions.path;

export default function* loadConfig(dispatch) {
  const state = yield select();
  const { config } = state;
  const { options } = config;

  if(options.length >= 0){
    yield cancelled();
  }

  try {
    const config = yield call(Fetch.GET, '/api/config');
    yield put({type: RECEIVE_CONFIG_DATA, data: config});
    yield loadAppOptions();
  }
  catch(error) {
    yield put({type: RECEIVE_CONFIG_FAILURE, error: error})
  }
}

/* ----------------- LOAD NOTIFICATIONS ----------------- */

export function* loadWebsocket(dispatch, enabled) {
 try{

   const state = yield select();
   const { session } = state;
   const user_id = session.user.id;

   if(enabled) {
     initializeWebsocketConnection(dispatch, user_id);
   }
  }
  catch{
    console.log("ERROR!");
  }
}

export function* loadAppOptions(dispatch){
  try {
    // Global options.
    const options = yield call(Fetch.GET, '/api/options');
    yield put({type: RECEIVE_APP_OPTIONS, data: options});
  }
  catch(error) {
    yield put({type: RECEIVE_APP_OPTIONS_FAILURE, error: error})
  }

}

export function initializeWebsocketConnection(dispatch, user_id) {
  try {
    const WS_URL = wssURL + "/" + user_id;
    dispatch({type: INITIALIZE_WEBSOCKET});
    const socket = new WebSocket(WS_URL);

    // Socket functions.
    socket.onopen = () => dispatch(initializeSucess());
    socket.onerror = (error) => dispatch(initializeWSError(error));
    socket.onmessage = (message) => dispatch(newMessage(message));
  }
  catch(error) {
    dispatch({ type: INITIALIZE_WEBSOCKET_FAILURE, error: error});
  }
}

export function initializeSucess(){
  return { type: INITIALIZE_WEBSOCKET_SUCCESS };
}

export function initializeWSError(error){
  return { type: INITIALIZE_WEBSOCKET_FAILURE };
}

export function newMessage(message) {
   return {type: NEW_NOTIFICATION, data: message.data };
}

/*
export function getNotifications() {

   const endpoint = "alerts";
   const types = [REQUEST_NOTIFICATIONS, RECEIVE_NOTIFICATIONS, REQUEST_NOTIFICATIONS_FAILURE];

   return (dispatch, getState) => {
      const state = getState();
      const token = state.session.token;

      dispatch(Fetch.GET(endpoint, types, {token: token}));
    }
}
*/
