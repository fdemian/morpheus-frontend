import { put, take } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import loadStories ,
{
  /* Functions */
  requestUserInfo,
  requestUserStories,
  getUserInfo,
  loadUserStories,

  /* Constants */
  GET_USER_INFO,
  RECEIVE_USER_INFO,
  RECEIVE_USER_INFO_FAILURE,
  GET_USER_STORIES,
  RECEIVE_USER_STORIES,
  RECEIVE_USER_STORIES_FAILURE
} from '../Actions';
import Fetch from '../../store/Fetch';

describe("User > Actions", () => {

  it("requestUserInfo()", () => {
    const result = { type: GET_USER_INFO, id: 1 };
    expect(requestUserInfo(1)).toStrictEqual(result);
  })

  it("requestUserStories()", () => {
    const result = { type: GET_USER_STORIES, id: 1 };
    expect(requestUserStories(1)).toStrictEqual(result);
  })


  it("requestUserStories()", () => {
    const result = { type: RECEIVE_USER_STORIES, id: 1 };

    const gen = loadStories(); // FETCH call.
    const callArgs = gen.next().value.payload.args;
    const callSuccess = gen.next();

    //console.log(callArgs);
    //console.log(callSuccess);
    // TODO: find out how does this thing work.
    // This log returns { value: undefined, done: true }

    //  { type: 'RECEIVE_USER_STORIES', data: undefined }
    ///const callResponse = callSuccess.value.payload.action;

    //expect(callArgs[0]).toBe(url); // call the right url.
    //
  })


})
