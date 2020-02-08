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

const initialState = {
  stories: [],
  isFetching: true,
  error: false,
  user: null
}

export function user(state = initialState, action) {

 switch (action.type) {

   case GET_USER_INFO:
     return { ...state, isFetching: true, error:false };

   case RECEIVE_USER_INFO:
     return {...state, isFetching: false, user: action.data.user };

   case RECEIVE_USER_INFO_FAILURE:
     return { ...state, isFetching: false, error: true };

    case GET_USER_STORIES:
	    return { ...state, isFetching: true, error: false };

    case RECEIVE_USER_STORIES:
	    return {...state, isFetching: false, stories: action.data.stories };

    case RECEIVE_USER_STORIES_FAILURE:
	    return { ...state, isFetching: false, error:true };

    default:
      return state;
  }

}

export default user;
