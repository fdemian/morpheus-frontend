import
{
  SEND_STORY,
  SEND_STORY_OK,
  SEND_STORY_FAILURE,
  EDIT_STORY,
  EDIT_STORY_OK,
  EDIT_STORY_FAILURE,
  CLEAR_COMPOSER,
  REQUEST_STORY_EDIT
} from '../../Composer/Actions';

const initialState = {
  id:-1,
  posted: false,
  editing: false,
  posting: false,
  error: false,
  story: null
};

const testStory = {
  id: 1,
  title: "Category Story test",
  author: { id: 1, name: 'user'}
};

import reducer from '../Reducers/Composer';


describe('Store > Reducers > Composer', () => {

  /* Initial state and unrelated actions */

  it('Initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState);
  })

  it('Unrelated action', () => {
    expect(reducer(initialState, {type: 'UNDEFINED'})).toStrictEqual(initialState);
  })

  /* SEND Story */

  it('SEND_STORY', () => {
    expect(reducer(initialState, {type: SEND_STORY }))
    .toStrictEqual({
      id:-1,
      posted: false,
      editing: false,
      posting: true,
      error: false,
      story: null
    });
  })

  it('SEND_STORY_FAILURE', () => {
    expect(reducer({
      id:-1,
      posted: false,
      editing: false,
      posting: true,
      error: false,
      story: null
    }, {type: SEND_STORY_FAILURE }))
    .toStrictEqual({
      id:-1,
      posted: false,
      editing: false,
      posting: false,
      error: true,
      story: null
    });
  })

  it('SEND_STORY_OK', () => {
    expect(reducer({
      id:-1,
      posted: false,
      editing: false,
      posting: true,
      error: false,
      story: null
    },
    { type:SEND_STORY_OK, data: { id: 1} }
    ))
    .toStrictEqual({
      id:1,
      posted: true,
      editing: false,
      posting: false,
      error: false,
      story: null
    });
  })

  it('REQUEST_STORY_EDIT', () => {
    expect(reducer({
      id:-1,
      posted: false,
      editing: false,
      posting: false,
      error: false,
      story: null
    },
    {
      type:REQUEST_STORY_EDIT,
      id: 1,
      story: testStory
    }))
    .toStrictEqual({
      id:1,
      posted: false,
      editing: true,
      posting: false,
      error: false,
      story: testStory
    });
  })

  it('EDIT_STORY', () => {
    expect(reducer({
      id:-1,
      posted: false,
      editing: false,
      posting: true,
      error: false,
      story: testStory
    },
    { type:EDIT_STORY, id: 1, data: testStory }
    ))
    .toStrictEqual({
      id:-1,
      posted: false,
      editing: false,
      posting: true,
      error: false,
      story: testStory
    });
  })


  it('EDIT_STORY_FAILURE', () => {
    expect(reducer({
      id:-1,
      posted: false,
      editing: false,
      posting: true,
      error: false,
      story: null
    },
    { type:EDIT_STORY_FAILURE }
    ))
    .toStrictEqual({
      id:-1,
      posted: false,
      editing: false,
      posting: false,
      error: true,
      story: null
    });
  })

  it('EDIT_STORY_OK', () => {
    expect(reducer({
      id:-1,
      posted: false,
      editing: false,
      posting: true,
      error: false,
      story: testStory
    },
    { type:EDIT_STORY_OK, data: testStory }
    ))
    .toStrictEqual({
      id: 1,
      posted: true,
      editing: false,
      posting: false,
      error: false,
      story: null
    });
  })

  it('CLEAR_COMPOSER', () => {
    expect(reducer({
      id:1,
      posted: false,
      editing: false,
      posting: true,
      error: false,
      story: null
    },
    { type:CLEAR_COMPOSER }
    ))
    .toStrictEqual({
      id: -1,
      posted: false,
      editing: false,
      posting: false,
      error: false,
      story: null
    });
  })

})
