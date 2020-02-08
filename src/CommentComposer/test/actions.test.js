import postComment ,
{
  requestPostComment,

  /* Constants */
  POST_COMMENT,
  POST_COMMENT_OK,
  POST_COMMENT_FAILURE,
} from '../Actions';

import Fetch from '../../store/Fetch';

import { put, take } from 'redux-saga/effects';

const emptyComment = "{\"blocks\":[{\"key\":\"99rvf\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}";

describe("CommentComposer > Actions", () => {

  it("requestPostComment()", () => {
    const result = {
       type: POST_COMMENT,
       content: emptyComment
    };
    expect(requestPostComment(emptyComment)).toStrictEqual(result);
  })

  /*
  it("postComment() > Success", async () => {
    const url = '/api/categories';
    const dispatched = [];

    Fetch.GET = jest.fn(() => {
      return {
       "page": 1,
       "items": [{
       "id": 5,
       "name": "Category 1",
       "description": "Description"
       }]
      }
    });

    const gen = loadCategories(); // FETCH call.
    const callArgs = gen.next().value.payload.args;
    const callSuccess = gen.next();

    //  { type: 'RECEIVE_CATEGORIES_OK', data: undefined }
    const callResponse = callSuccess.value.payload.action;

    expect(callArgs[0]).toBe(url); // call the right url.
    expect(callResponse).toStrictEqual({
      type: RECEIVE_CATEGORIES_OK,
      data: undefined // TODO mock response.
    })

  })*/

})
