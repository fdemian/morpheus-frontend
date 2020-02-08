import loadDrafts ,
{
  requestDrafts,
  requestDeleteDraft,
  requestEditDraft,
  getDraft,
  deleteDraft,
  editDraft,

  /* Constants */
  REQUEST_DRAFT_EDIT,
  GET_DRAFTS,
  RECEIVE_DRAFTS,
  RECEIVE_DRAFTS_FAILURE,
  DELETE_DRAFT,
  DELETE_DRAFT_OK,
  DELETE_DRAFT_FAILURE,
  EDIT_DRAFT,
  EDIT_DRAFT_OK,
  GET_DRAFT
} from '../Actions';
import Fetch from '../../store/Fetch';

import { put, take } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

describe("Drafts > Actions", () => {

  it("requestDrafts()", () => {
    const result = { type: GET_DRAFTS };
    expect(requestDrafts()).toStrictEqual(result);
  });

  it("requestDeleteDraft()", () => {
    const result = { type: DELETE_DRAFT, id: 1 };
    expect(requestDeleteDraft(1)).toStrictEqual(result);
  });

  /*
  it("loadCategories() > Success", async () => {
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

  })

  it("loadCategories() > Fail", async () => {
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
    const callFail = gen.throw({message: "error!"}).value;
    const failType = callFail.payload.action;

    expect(failType.type).toStrictEqual(RECEIVE_CATEGORIES_FAILURE);
    expect(failType.error).toStrictEqual({message: "error!"});
  })



  /*
  it("deleteCategory() > Success", () => {
    const result = { type: DELETE_CATEGORY, id: 1 };

    expect(callArgs[0]).toBe(url); // call the right url.
    expect(callResponse).toStrictEqual({
      type: DELETE_CATEGORY_OK,
      data: undefined // TODO mock response.
    })

  })*/

});
