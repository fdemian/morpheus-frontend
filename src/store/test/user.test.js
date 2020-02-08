import
{
  GET_USER_INFO,
  RECEIVE_USER_INFO,
  RECEIVE_USER_INFO_FAILURE,
  GET_USER_STORIES,
  RECEIVE_USER_STORIES,
  RECEIVE_USER_STORIES_FAILURE
}
from '../../User/Actions';

import reducer from '../Reducers/User';


const initialState = {
  stories: [],
  isFetching: true,
  error: false,
  user: null
}

const testUser = {
  id: 13,
  avatar: "pic.png",
  username: "admin",
  fullname: "",
  email: "test@gmail.com",
  role: "author",
  link: "/users/13/admin",
  signature: "Base signature.",
  about: "Base man.",
  loaded: true
};


describe('Store > Reducers > User', () => {

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

  it('GET_USER_INFO', () => {
    expect(reducer(initialState, {type: GET_USER_INFO }))
    .toStrictEqual({
      stories: [],
      isFetching: true,
      error: false,
      user: null
    });
  })

  it('RECEIVE_USER_INFO_FAILURE', () => {
    expect(reducer({
      stories: [],
      isFetching: true,
      error: false,
      user: null
    }, {type: RECEIVE_USER_INFO_FAILURE }))
    .toStrictEqual({
      stories: [],
      isFetching: false,
      error: true,
      user: null
    });
  })

  it('RECEIVE_USER_INFO', () => {
    expect(reducer({
      stories: [],
      isFetching: true,
      error: false,
      user: null
    },
    { type:RECEIVE_USER_INFO, data: { user: testUser } }
    ))
    .toStrictEqual({
      stories: [],
      isFetching: false,
      error: false,
      user: testUser
    });
  })


  it('GET_USER_STORIES', () => {
    expect(reducer({
      stories: [],
      isFetching: true,
      error: false,
      user: testUser
    },
    { type:GET_USER_STORIES }
    ))
    .toStrictEqual({
      stories: [],
      isFetching: true,
      error: false,
      user: testUser
    });
  })

  it('RECEIVE_USER_STORIES_FAILURE', () => {
    expect(reducer({
      stories: [],
      isFetching: true,
      error: false,
      user: testUser
    },
    { type:RECEIVE_USER_STORIES_FAILURE }
    ))
    .toStrictEqual({
      stories: [],
      isFetching: false,
      error: true,
      user: testUser
    });
  })

  it('RECEIVE_USER_STORIES', () => {
    expect(reducer({
      stories: [],
      isFetching: true,
      error: false,
      user: testUser
    },
    { type:RECEIVE_USER_STORIES,
      data: {
       stories: [{
         id: 1,
         title: "Category Story test",
         author: { id: 1, name: 'user'}
        }]
      }
    }
    ))
    .toStrictEqual({
      stories: [{
        id: 1,
        title: "Category Story test",
        author: { id: 1, name: 'user'}
      }],
      isFetching: false,
      error: false,
      user: testUser
    });
  })



})
