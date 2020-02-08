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

const initialState = {
  id : 0,
  category: null,
  isFetching: false,
  error: false,
  stories: []
}

export function category(state = initialState, action) {
 switch (action.type) {

    /* Request category info */
    case REQUEST_CATEGORY:
	     return { ...state, isFetching: true, error:false };
    case RECEIVE_CATEGORY:
	     return {...state, category: action.data, isFetching: false } ;
    case RECEIVE_CATEGORY_FAILURE:
	     return { ...state, isFetching: false, error:true };

       /* Request category stories */
    case REQUEST_CATEGORY_STORIES:
   	   return { ...state, isFetching: true, error:false };
    case RECEIVE_CATEGORY_STORIES:
   	   return {...state, stories: action.data.items, isFetching: false } ;
    case RECEIVE_CATEGORY_STORIES_FAILURE:
   	   return { ...state, isFetching: false, error:true };

    default:
      return state;
  }
}

export default category;
