import
{
  REQUEST_CONFIG_DATA,
  RECEIVE_CONFIG_DATA,
  RECEIVE_CONFIG_FAILURE,
  RECEIVE_APP_OPTIONS,
  RECEIVE_APP_OPTIONS_FAILURE
} from '../../App/Actions';

import {
  UPDATE_SEC_INFO,
  SEC_INFO_UPDATED,
  SEC_INFO_UPDATE_FAIL
} from '../../Account/Security/Actions';

const initialState = {
  blogName: "",
  description: "",
  options: [],
  oauth: [],
  notificationsEnabled: false,
  isFetching: false,
  error: false,
  fetched: false
}

import reducer from '../Reducers/Config';

const configData = {
  blogName: "Morpheus",
  oauth: [{
    name: "Oauth Provider 1",
    key: "123456abcdef"
  }],
  notificationsEnabled: false
}

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

  it('REQUEST_CONFIG_DATA', () => {
    expect(reducer(initialState, {type: REQUEST_CONFIG_DATA }))
    .toStrictEqual({
      blogName: "",
      options: [],
      description: "",
      oauth: [],
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: false
    })
  })

  it('RECEIVE_CONFIG_DATA', () => {
    expect(reducer({
      blogName: "",
      options: [],
      description: "",
      oauth: [],
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: false
    }, {type: RECEIVE_CONFIG_DATA, data: configData }))
    .toStrictEqual({
      blogName: "Morpheus",
      options: [],
      oauth: [{
        name: "Oauth Provider 1",
        key: "123456abcdef"
      }],
      description: undefined,
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: true
    });
  })

  it('RECEIVE_CONFIG_FAILURE', () => {
    expect(reducer({
      options: [],
      description: "",
      oauth: [],
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: false
    },
    { type: RECEIVE_CONFIG_FAILURE }
    ))
    .toStrictEqual({
      options: [],
      description: "",
      oauth: [],
      notificationsEnabled: false,
      isFetching: false,
      error: true,
      fetched: false
    });
  })

  it('RECEIVE_APP_OPTIONS', () => {
    expect(reducer({
      options: [],
      oauth: [{
        name: "Oauth Provider 1",
        key: "123456abcdef"
      }],
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: false
    },
    { type:RECEIVE_APP_OPTIONS,
      data: {
        options: [{
        key: 'comments',
        value: 'OFF'
        }]
      }
    }
    ))
    .toStrictEqual({
      options: [{key: 'comments', value: 'OFF'}],
      oauth: [{
        name: "Oauth Provider 1",
        key: "123456abcdef"
      }],
      notificationsEnabled: false,
      isFetching: false,
      error: false,
      fetched: true
    });
  })

  it('RECEIVE_APP_OPTIONS_FAILURE', () => {
    expect(reducer({
      options: [],
      oauth: [{
        name: "Oauth Provider 1",
        key: "123456abcdef"
      }],
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: false
    },
    { type:RECEIVE_APP_OPTIONS_FAILURE }
    ))
    .toStrictEqual({
      options: [],
      oauth: [{
        name: "Oauth Provider 1",
        key: "123456abcdef"
      }],
      notificationsEnabled: false,
      isFetching: false,
      error: true,
      fetched: false
    });
  })

  it('UPDATE_SEC_INFO', () => {
    expect(reducer({
      options: [{key: 'comments', value: 'OFF'}],
      oauth: [],
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: false
    },
    { type: UPDATE_SEC_INFO }
    ))
    .toStrictEqual({
      options: [{key: 'comments', value: 'OFF'}],
      oauth: [],
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: false
    });
  })

  it('SEC_INFO_UPDATE_FAIL', () => {
    expect(reducer({
      options: [{key: 'comments', value: 'OFF'}],
      oauth: [],
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: false
    },
    { type: SEC_INFO_UPDATE_FAIL }
    ))
    .toStrictEqual({
      options: [{key: 'comments', value: 'OFF'}],
      oauth: [],
      notificationsEnabled: false,
      isFetching: false,
      error: true,
      fetched: false
    });
  })

  it('SEC_INFO_UPDATED', () => {
    expect(reducer({
      options: [{key: 'comments', value: 'OFF'}],
      oauth: [],
      notificationsEnabled: false,
      isFetching: true,
      error: false,
      fetched: false
    },
    { type: SEC_INFO_UPDATED, data: [{key: 'comments', value: 'ANONYMOUS'}] }
    ))
    .toStrictEqual({
      options: [{key: 'comments', value: 'ANONYMOUS'}],
      oauth: [],
      notificationsEnabled: false,
      isFetching: false,
      error: false,
      fetched: false
    });
  })

})
