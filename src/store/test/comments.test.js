import {
 POST_COMMENT,
 POST_COMMENT_OK,
 POST_COMMENT_FAILURE
} from '../../CommentComposer/Actions';

import reducer from '../Reducers/Comments';


const initialState = {
  comments: [],
  posting: true,
  error: false
}

const emptyComment = "{\"blocks\":[{\"key\":\"99rvf\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}";

describe('Store > Reducers > Comments', () => {

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

  it('POST_COMMENT', () => {
    expect(reducer(initialState, {type: POST_COMMENT }))
    .toStrictEqual({
      comments: [],
      posting: true,
      error: false
    });
  })

  it('POST_COMMENT_OK', () => {
    expect(reducer(
    {
      comments: [],
      posting: false,
      error: false,
    },
    { type:POST_COMMENT_FAILURE }
    ))
    .toStrictEqual({
      comments: [],
      posting: false,
      error: true,
    });
  })

  it('POST_COMMENT_OK', () => {
    expect(reducer({
      comments: [],
      posting: true,
      error: true
    },
    { type:POST_COMMENT_OK, data: emptyComment  }))
    .toStrictEqual({
      comments: [emptyComment],
      posting: false,
      error: true
    });
  })

})
