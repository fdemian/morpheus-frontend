//import Fetch from '../store/Fetch';
import initialData from './initialData';
import useSWR from 'swr';

/* ----------------- LOAD NOTIFICATIONS ----------------- */
/*
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
*/

export const useConfig = () => {
  const { data, error } = useSWR('/api/config', { initialData: initialData});

  return {
    config: data,
    isLoading: !error && !data,
    isError: error
  }
}
