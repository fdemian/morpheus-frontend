import {
  GET_CATEGORIES,
  RECEIVE_CATEGORIES_OK,
  RECEIVE_CATEGORIES_FAILURE,
  DELETE_CATEGORY,
  DELETE_CATEGORY_OK,
  DELETE_CATEGORY_FAILURE,
  CREATE_CATEGORY,
  CREATE_CATEGORY_OK,
  CREATE_CATEGORY_FAILURE
} from '../../Categories/Actions';

import reducer from '../Reducers/Categories';

const initialState = {
  items: [],
  error: false,
  isFetching: false,
};

describe('Store > Reducers > Categories', () => {

  /* Initial state and unrelated actions */

  it('Initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState);
  })

  it('Unrelated action', () => {
    expect(reducer(initialState, {type: 'UNDEFINED'})).toStrictEqual(initialState);
  })

  /* GET categories */

  it('GET_CATEGORIES', () => {
    expect(reducer(initialState, {type: GET_CATEGORIES }))
    .toStrictEqual({
      items: [],
      error: false,
      isFetching: true,
    });
  })

  it('RECEIVE_CATEGORIES_OK', () => {
    expect(reducer({
      items: [],
      error: false,
      isFetching: true
    },
    {
      type:RECEIVE_CATEGORIES_OK,
      data:
      {
        items:[
          {id: 1, name: "Category 1"},
          {id: 2, name: "Category 2"},
        ]
      }
    }))
    .toStrictEqual({
      items: [
        {id: 1, name: "Category 1"},
        {id: 2, name: "Category 2"},
      ],
      error: false,
      isFetching: false
    });
  })

  it('RECEIVE_CATEGORIES_FAILURE', () => {
    expect(reducer({
      items: [],
      error: false,
      isFetching: true
    },
    { type:RECEIVE_CATEGORIES_FAILURE  }))
    .toStrictEqual({
      items: [],
      error: true,
      isFetching: false
    });
  })

  it('CREATE_CATEGORY', () => {
    expect(reducer({
      items: [],
      error: false,
      isFetching: false
    },
    { type:CREATE_CATEGORY  }))
    .toStrictEqual({
      items: [],
      error: false,
      isFetching: false
    });
  })

  it('CREATE_CATEGORY_FAILURE', () => {
    expect(reducer({
      items: [],
      error: false,
      isFetching: false
    },
    { type: CREATE_CATEGORY_FAILURE  }))
    .toStrictEqual({
      items: [],
      error: false,
      isFetching: false
    });
  })

  it('CREATE_CATEGORY_OK', () => {
    expect(reducer({
      items: [],
      error: false,
      isFetching: false
    },
    {
      type:CREATE_CATEGORY_OK,
      data: [{id: 1, name: "New category"}]
    }
    ))
    .toStrictEqual({
      items: [{
        id: 1,
        name: "New category"
      }],
      error: false,
      isFetching: false
    });
  })

  /* Delete category */

  it('DELETE_CATEGORY', () => {
    expect(reducer({
      items: [],
      error: false,
      isFetching: false
    },
    { type: DELETE_CATEGORY  }))
    .toStrictEqual({
      items: [],
      error: false,
      isFetching: false
    });
  })

  it('DELETE_CATEGORY_FAILURE', () => {
    expect(reducer({
      items: [],
      error: false,
      isFetching: false
    },
    { type: DELETE_CATEGORY_FAILURE  }))
    .toStrictEqual({
      items: [],
      error: false,
      isFetching: false
    });
  })


  it('DELETE_CATEGORY_OK', () => {
    expect(reducer({
      items: [{id: 1, name: "New category"}],
      error: false,
      isFetching: false
    },
    {
      type:DELETE_CATEGORY_OK,
      data: { id: 1}
    }
    ))
    .toStrictEqual({
      items: [],
      error: false,
      isFetching: false
    });
  })




})
