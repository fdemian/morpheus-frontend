import loadCategories ,
{
  requestCategories,
  requestDeleteCategory,
  deleteCategory,
  createCategory,

  /* Constants */
  GET_CATEGORIES,
  RECEIVE_CATEGORIES_OK,
  RECEIVE_CATEGORIES_FAILURE,
  DELETE_CATEGORY,
  DELETE_CATEGORY_OK,
  DELETE_CATEGORY_FAILURE,
  CREATE_CATEGORY,
  CREATE_CATEGORY_OK,
  CREATE_CATEGORY_FAILURE
} from '../Actions';
import Fetch from '../../store/Fetch';

import { put, take } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

describe("Categories > Actions", () => {

  it("requestCategories()", () => {
    const result = { type: GET_CATEGORIES };
    expect(requestCategories()).toStrictEqual(result);
  })

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

  it("requestDeleteCategory()", () => {
    const result = { type: DELETE_CATEGORY, id: 1 };
    expect(requestDeleteCategory(1)).toStrictEqual(result);
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
  




})
