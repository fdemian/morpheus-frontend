import { cloneableGenerator } from '@redux-saga/testing-utils';
import loadStories ,
{
  /* Functions */
  requestStories,
  requestDeleteStory,
  deleteStory,
  requestEditStory,
  editStory,

  /* Constants */
  REQUEST_STORY_EDIT,
  GET_STORIES,
  RECEIVE_STORIES,
  RECEIVE_STORIES_FAILURE,
  DELETE_STORY,
  DELETE_STORY_OK,
  DELETE_STORY_FAILURE,
  EDIT_STORY,
  EDIT_STORY_OK
} from '../Actions';

import testStories from './data';
import Fetch from '../../store/Fetch';

describe("Stories > Actions", () => {

  it("requestStories()", () => {
    const result = { type: GET_STORIES };
    expect(requestStories()).toStrictEqual(result);
  })

  it("loadStories() > Success", () => {
    const url = '/api/stories';
    const dispatched = [];

    /* TODO: change */
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

    const gen = loadStories(); // FETCH call.
    const callArgs = gen.next().value.payload.args;
    const callSuccess = gen.next();

    //  { type: 'RECEIVE_CATEGORIES_OK', data: undefined }
    const callResponse = callSuccess.value.payload.action;

    expect(callArgs[0]).toBe(url); // call the right url.
    expect(callResponse).toStrictEqual({
      type: RECEIVE_STORIES,
      data: undefined // TODO mock response.
    })
  })

  it("loadCategories() > Fail", async () => {
    const url = '/api/stories';
    const dispatched = [];

    /* TODO: change */
    Fetch.GET = jest.fn(() => { return {} });

    const gen = loadStories(); // FETCH call.
    const callArgs = gen.next().value.payload.args;
    const callFail = gen.throw({message: "error!"}).value;
    const failType = callFail.payload.action;

    expect(failType.type).toStrictEqual(RECEIVE_STORIES_FAILURE);
    expect(failType.error).toStrictEqual({message: "error!"});
  })

  it("requestDeleteStory()", () => {
    const result = { type: DELETE_STORY, id:1 };
    expect(requestDeleteStory(1)).toStrictEqual(result);
  })

  it("requestEditStory()", () => {
    const storyToEdit = {
      date: "2018-03-03",
      id: 33,
      name: 'Topic title here',
      content: '{"blocks": [{"key": "a9dpr", "text": "Brace yourselves", "type": "header-two", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {}}, {"key": "bfvmj", "text": "", "type": "header-two", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {}}, {"key": "f06vm", "text": "Do not go gente, into that good night. Rage, rage agains the dying of the light.", "type": "blockquote", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {}}], "entityMap": {}}',
      tags: ['Interstellar','Quotes'],
      author: {
        id: 13,
        name: 'admin',
        avatar: 'admin_d947a61b-a4a3-4858-858e-61d6b58dac41..png'
      },
      comments: 0,
      category: {
        id: 5,
        name: 'Category 1'
      }
    };

   const result = {
     type: REQUEST_STORY_EDIT,
     id: 33,
     story: storyToEdit
   };

   expect(requestEditStory(33, testStories)).toStrictEqual(result);
  })

})
