import {
  INITIALIZE_WEBSOCKET_SUCCESS,
  INITIALIZE_WEBSOCKET_FAILURE,
  NEW_NOTIFICATION,
  RECEIVE_APP_OPTIONS,
  RECEIVE_APP_OPTIONS_FAILURE,
  initializeSucess,
  initializeWSError,
  newMessage,
  loadAppOptions,
} from '../Actions';

import Fetch from '../../store/Fetch';

describe("Categories > Actions", () => {

  it("initializeSucess()", () => {
   const response = { type: INITIALIZE_WEBSOCKET_SUCCESS };
   expect(initializeSucess()).toStrictEqual(response);
  })

  it("initializeWSError()", () => {
   const response = { type: INITIALIZE_WEBSOCKET_FAILURE };
   expect(initializeWSError()).toStrictEqual(response);
  })

  it("newMessage() > New WS message", () => {

    const messageData = {
      id: 1,
      type: "notification",
      message: "X commented on your story"
    };
    const params = { data: messageData };
    const response = { type: NEW_NOTIFICATION, data: messageData };

    expect(newMessage(params)).toStrictEqual(response);
  })

  it("loadAppOptions > Load options", async () => {
    const url = '/api/options';
    const dispatched = [];

    Fetch.GET = jest.fn(() => {
      return {
        "page": 1,
        "options": [{
          "key": "comments",
          "value": "OFF"
         }]
      }
    });

    const gen = loadAppOptions(); // FETCH call.
    const callArgs = gen.next().value.payload.args;
    const callSuccess = gen.next();
    const callResponse = callSuccess.value.payload.action;

    expect(callArgs[0]).toBe(url); // call the right url.
    expect(callResponse).toStrictEqual({
      type: RECEIVE_APP_OPTIONS,
      data: undefined // TODO mock response.
    })
  })

  it("loadAppOptions > Load options > FAIL", async () => {
    const url = '/api/options';
    const dispatched = [];

    Fetch.GET = jest.fn(() => {
      return {
        "page": 1,
        "options": [{
          "key": "comments",
          "value": "OFF"
         }]
      }
    });

    const gen = loadAppOptions(); // FETCH call.
    gen.next();

    const callFail = gen.throw({message: "error!"});
    const failType = callFail.value.payload.action;

    expect(failType.type).toStrictEqual(RECEIVE_APP_OPTIONS_FAILURE);
    expect(failType.error).toStrictEqual({message: "error!"});
  })

})
