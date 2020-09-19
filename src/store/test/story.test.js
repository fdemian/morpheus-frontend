import
{
  REQUEST_STORY,
  RECEIVE_STORY,
  RECEIVE_STORY_FAILURE,
}
from '../../Story/Actions';
import { POST_COMMENT_OK } from '../../CommentComposer/Actions';
import reducer from '../Reducers/Story';

const initialState = {
  id : 0,
  title: "",
  category: {id:0, name:""},
  content: null,
  comments: [],
  tags: [],
  isFetching: false,
  error: false,
  author: null,
  isDraft: false
}

const testStory = {
  id : 1,
  title: "Story 1",
  category: { id:3, name:"A category" },
  content: "",
  comments: [],
  tags: [],
  author: { id:1, name: "An author." },
  date: '2019-07-21 20:57:24.238995',
  is_draft: false
};

describe('Store > Reducers > Story', () => {

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

  it('REQUEST_STORY', () => {
    expect(reducer(initialState, {type: REQUEST_STORY }))
    .toStrictEqual({
      id : 0,
      title: "",
      category: {id:0, name:""},
      content: null,
      comments: [],
      tags: [],
      isFetching: true,
      error: false,
      author: null,
      isDraft: false
    })
  })

  it('RECEIVE_STORY', () => {
    expect(reducer({
      id : 0,
      title: "",
      category: {id:0, name:""},
      content: null,
      comments: [],
      tags: [],
      isFetching: false,
      error: false,
      author: null,
      isDraft: false,
    }, {type: RECEIVE_STORY, data: testStory }))
    .toStrictEqual({
      id : 1,
      title: "Story 1",
      category: { id:3, name:"A category" },
      content: "",
      comments: [],
      tags: [],
      isFetching: false,
      error: false,
      author: { id:1, name: "An author." },
      date: "2019-07-21 20:57:24.238995",
      isDraft: false,
    });
  })

  it('RECEIVE_STORY_FAILURE', () => {
    expect(reducer({
      id : 0,
      title: "",
      category: {id:0, name:""},
      content: null,
      comments: [],
      tags: [],
      isFetching: true,
      error: false,
      author: null,
    },
    { type: RECEIVE_STORY_FAILURE }
    ))
    .toStrictEqual({
      id : 0,
      title: "",
      category: {id:0, name:""},
      content: null,
      comments: [],
      tags: [],
      isFetching: false,
      error: true,
      author: null,
    });
  })

  it('POST_COMMENT_OK', () => {
    expect(reducer({
      id : 1,
      title: "Story 1",
      category: { id:3, name:"Story 1" },
      content: "",
      comments: [],
      tags: [],
      isFetching: false,
      error: false,
      author: { id:1, name: "An author." },
    },
    { type:POST_COMMENT_OK, data: { id: 1, author: {id:1, name:"Author x"}, content: ""}}
    ))
    .toStrictEqual({
      id : 1,
      title: "Story 1",
      category: { id:3, name:"Story 1" },
      content: "",
      comments: [{
        id: 1,
        author: {id:1, name:"Author x"},
        content: ""
      }],
      tags: [],
      isFetching: false,
      error: false,
      author: { id:1, name: "An author." }
    });
  })

})
