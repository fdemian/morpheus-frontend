import
{
  GET_STORIES,
  RECEIVE_STORIES,
  RECEIVE_STORIES_FAILURE,
  DELETE_STORY,
  DELETE_STORY_OK,
  DELETE_STORY_FAILURE
} from '../../Stories/Actions';

import { NEW_STORY } from '../../Composer/Actions';

import reducer from '../Reducers/Stories';

const initialState = {
  stories: null,
  isFetching: false,
  error: false
}

const testStories = [
 {
  id: 1,
  title: "Category Story test",
  author: { id: 1, name: 'user'}
 },
 {
  id: 2,
  title: "Category Story test 2",
  author: { id: 1, name: 'user'}
 },
];

describe('Store > Reducers > Stories', () => {

  /* Initial state and unrelated actions */

  it('Initial state', () => {
    expect(reducer(undefined, {}))
    .toStrictEqual(initialState);
  })

  it('Unrelated action', () => {
    expect(reducer(initialState, {type: 'UNDEFINED'}))
    .toStrictEqual(initialState);
  })

  /* GET comments */

  it('GET_STORIES', () => {
    expect(reducer(initialState, {type: GET_STORIES }))
    .toStrictEqual({
      stories: null,
      isFetching: true,
      error: false
    })
  })

  it('RECEIVE_STORIES', () => {
    expect(reducer({
      stories: null,
      isFetching: true,
      error: false
    }, {type: RECEIVE_STORIES, data: { items: testStories } }))
    .toStrictEqual({
      stories: testStories,
      isFetching: false,
      error: false
    });
  })

  it('RECEIVE_STORIES_FAILURE', () => {
    expect(reducer({
      stories: null,
      isFetching: true,
      error: false
    },
    { type: RECEIVE_STORIES_FAILURE }
    ))
    .toStrictEqual({
      stories: null,
      isFetching: false,
      error: true
    });
  })

  it('DELETE_STORY', () => {
    expect(reducer({
      stories: testStories,
      isFetching: false,
      error: false
    },
    { type:DELETE_STORY }
    ))
    .toStrictEqual({
      stories: testStories,
      isFetching: false,
      error: false
    });
  })

  it('DELETE_STORY_FAILURE', () => {
    expect(reducer({
      stories: testStories,
      isFetching: false,
      error: false
    },
    { type:DELETE_STORY_FAILURE }
    ))
    .toStrictEqual({
      stories: testStories,
      isFetching: false,
      error: true
    });
  })

  it('DELETE_STORY_OK', () => {
    expect(reducer({
      stories: testStories,
      isFetching: false,
      error: false
    },
    { type:DELETE_STORY_OK, data: { id: 1 } }
    ))
    .toStrictEqual({
      stories: [{
        id: 2,
        title: "Category Story test 2",
        author: { id: 1, name: 'user'}
      }],
      isFetching: false,
      error: false
    });
  })

  it('NEW_STORY', () => {
    expect(reducer({
      stories: [],
      isFetching: false,
      error: false
    },
    {
      type:NEW_STORY,
      story: {
       id: 2,
       title: "Category Story test 2",
       author: { id: 1, name: 'user'}
      }
    }
    ))
    .toStrictEqual({
      stories: [{
        id: 2,
        title: "Category Story test 2",
        author: { id: 1, name: 'user'}
      }],
      isFetching: false,
      error: false
    });
  })

})
