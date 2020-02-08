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

const initialState = {
  items: [],
  error: false,
  isFetching: false,
}

export function categories(state = initialState, action) {

 switch (action.type) {

   /* Get list of categories */
    case GET_CATEGORIES:
       return {...state, isFetching: true};
    case RECEIVE_CATEGORIES_OK:
       return {...state, items: action.data.items, isFetching: false};
   case RECEIVE_CATEGORIES_FAILURE:
       return {...state, error: true, isFetching: false};

   /* Create a category */
   case CREATE_CATEGORY:
       return state;
   case CREATE_CATEGORY_OK:
       const newItems = state.items.concat(action.data);
       return {...state, items: newItems };
   case CREATE_CATEGORY_FAILURE:
       return state;

   /*  Delete a category */
    case DELETE_CATEGORY:
       return state;
    case DELETE_CATEGORY_OK:
       const id = parseInt(action.data.id, 10);
       const items = state.items.filter(c => c.id !== id);
       return {...state, items: items};
    case DELETE_CATEGORY_FAILURE:
       return state;

   default:
      return state;

  }

}

export default categories;
