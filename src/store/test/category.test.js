import
{
  REQUEST_CATEGORY,
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORY_FAILURE,
  REQUEST_CATEGORY_STORIES,
  RECEIVE_CATEGORY_STORIES,
  RECEIVE_CATEGORY_STORIES_FAILURE
}
from '../../Category/Actions';

import reducer from '../Reducers/Category';

const initialState = {
  id : 0,
  category: null,
  isFetching: false,
  error: false,
  stories: []
};

describe('Store > Reducers > Category', () => {

  /* Initial state and unrelated actions */

  it('Initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState);
  })

  it('Unrelated action', () => {
    expect(reducer(initialState, {type: 'UNDEFINED'})).toStrictEqual(initialState);
  })

  /* GET category */

  it('REQUEST_CATEGORY', () => {
    expect(reducer(initialState, {type: REQUEST_CATEGORY }))
    .toStrictEqual({
      id : 0,
      category: null,
      isFetching: true,
      error: false,
      stories: []
    });
  })

  it('RECEIVE_CATEGORY', () => {
    expect(reducer({
      id : 0,
      category: null,
      isFetching: true,
      error: false,
      stories: []
    },
    {
      type:RECEIVE_CATEGORY,
      data: { id: 1, name: "Category 1"}
    }
    ))
    .toStrictEqual({
      id : 0,
      category: { id: 1, name: "Category 1"},
      isFetching: false,
      error: false,
      stories: []
    });
  })

  it('RECEIVE_CATEGORY_FAILURE', () => {
    expect(reducer({
      id : 0,
      category: null,
      isFetching: true,
      error: false,
      stories: []
    },
    { type:RECEIVE_CATEGORY_FAILURE  }))
    .toStrictEqual({
      id : 0,
      category: null,
      isFetching: false,
      error: true,
      stories: []
    });
  })

  /* Request category stories */

  it('REQUEST_CATEGORY_STORIES', () => {
    expect(reducer(
    {
      id: 0,
        category: { id: 1, name: "Category 1"},
        isFetching: true,
        error: false,
        stories: []
    },
    {
      type: REQUEST_CATEGORY_STORIES
    }
    ))
    .toStrictEqual({
      id: 0,
      category: { id: 1, name: "Category 1"},
      isFetching: true,
      error: false,
      stories: []
    });
  })

  it('RECEIVE_CATEGORY_STORIES', () => {
    expect(reducer({
      id : 0,
      category: { id: 1, name: "Category 1"},
      isFetching: true,
      error: false,
      stories: []
    },
    {
      type: RECEIVE_CATEGORY_STORIES,
      data: {
        items: [{
          id: 1,
          title: "Category Story test",
          author: { id: 1, name: 'user'}
        }]
      }
    }
    ))
    .toStrictEqual({
      id : 0,
      category: { id: 1, name: "Category 1"},
      isFetching: false,
      error:false,
      stories:[{
        author: {"id": 1, "name": "user" },
        id: 1,
        title: "Category Story test",
      }]
    });
  })

  it('RECEIVE_CATEGORY_STORIES_FAILURE', () => {
    expect(reducer({
      id : 0,
      category: null,
      isFetching: true,
      error: false,
      stories: []
    },
    { type:RECEIVE_CATEGORY_STORIES_FAILURE  }))
    .toStrictEqual({
      id : 0,
      category: null,
      isFetching: false,
      error: true,
      stories: []
    });
  })

})
