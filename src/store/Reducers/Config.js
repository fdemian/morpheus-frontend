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
  options: [],
  oauth: [],
  notificationsEnabled: false,
  blogName: "",
  description:"",
  isFetching: false,
  error: false,
  fetched: false
}

export function configuration(state = initialState, action) {

  const { data } = action;

  switch (action.type) {

    case REQUEST_CONFIG_DATA:
	    return { ...state, isFetching: true }

    case RECEIVE_CONFIG_DATA:
	    return  {
        ...state,
        oauth: data.oauth,
        notificationsEnabled: data.notificationsEnabled,
        blogName: data.blogName,
        description:data.description,
        fetched: true
      };

    case RECEIVE_CONFIG_FAILURE:
        return { ...state, isFetching: false, error: true};

    case RECEIVE_APP_OPTIONS:
        return {...state, options: data.options, isFetching: false, fetched: true}

    case RECEIVE_APP_OPTIONS_FAILURE:
        return { ...state, isFetching: false, error: true};

    case UPDATE_SEC_INFO:
       return {...state, isFetching: true};

    case SEC_INFO_UPDATED:
       const _options = [].concat(action.data);
       return {...state, options: _options, isFetching: false};

    case SEC_INFO_UPDATE_FAIL:
        return {...state, isFetching: false, error: true};

    default:
        return state;
  }

}

export default configuration;
