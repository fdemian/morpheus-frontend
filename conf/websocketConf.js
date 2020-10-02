import { gql } from 'apollo-boost';

// WSS helpers.
const IS_DEV = process.env.NODE_ENV === "development";
const LOCAL_URL = "localhost:8888";
const PROD_URL = window.location.href.split("//")[1].split("/")[0];
const WSS_PROTOCOL = IS_DEV ?  "ws://" : "wss://"

const getBaseUrl = (IS_DEV, PROD_URL, LOCAL_URL) => {
  //return "localhost:443/";
  return  IS_DEV ? LOCAL_URL : PROD_URL;
}

const wsOptions = {
  protocol: WSS_PROTOCOL,
  base: getBaseUrl(IS_DEV, PROD_URL, LOCAL_URL),
  path: '/api/notifications'
};

const wssURL = wsOptions.protocol + wsOptions.base + wsOptions.path

// TODO: get notifications enabled param from conf.
export const connectToSocket = (actions, id) => {
      try{
        const URL_WITH_ID = wssURL + "/" + id;
        const socket = new WebSocket(URL_WITH_ID);

        // Socket functions.
        socket.onopen = () => actions.initialize();
        socket.onerror = (error) => actions.error(error);
        socket.onmessage = (message) => actions.message(message);
      }
      catch(error){
        // There was an error initializing websocket.
        console.clear()
        console.log(error)
      }
}

/* -------------- NOTIFICATIONS FUNCTIONS ------------------- */

const GET_MESSAGES = gql`
  query Comments($roomId: Int!) {
    comments(roomId: $roomId) @client {
      author
      content
      date
      __typename
    }
  }
`;

export const onWSMessage = (message, client) => {

  const parsedComment = JSON.parse(message.data);
  const roomId = parsedComment.room;

  // Read the data from our cache for this query.
  const data = client.readQuery({
    query: GET_MESSAGES,
    variables: { roomId: roomId }
  });

  client.writeQuery({
   query: GET_MESSAGES,
   variables: { roomId: roomId },
   data: {...data, comments: [...data.comments, parsedComment]}
  });
}
