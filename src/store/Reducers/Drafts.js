import
{
  GET_DRAFTS,
  RECEIVE_DRAFTS,
  RECEIVE_DRAFTS_FAILURE,
  DELETE_DRAFT,
  DELETE_DRAFT_OK,
  DELETE_DRAFT_FAILURE,
  /*REQUEST_DRAFT_EDIT,
  EDIT_DRAFT,
  EDIT_DRAFT_OK*/
} from '../../Drafts/Actions';

const initialState = {
  drafts: null,
  isFetching: false,
  error: false
}

export function drafts(state = initialState, action) {

 switch (action.type) {

  case GET_DRAFTS:
	  return { ...state, isFetching: true }

  case RECEIVE_DRAFTS:
	  return {
      ...state,
      drafts: action.data.items,
      isFetching: false,
      error: false
    }

	case RECEIVE_DRAFTS_FAILURE:
	  return { ...state, isFetching: false, error: true }

  case DELETE_DRAFT:
	  return { ...state };

  case DELETE_DRAFT_OK:
    const id = parseInt(action.data.id, 10);
    const updatedDrafts = state.drafts.filter(element => element.id !== id);
	  return { ...state, drafts: updatedDrafts, error: false };

	case DELETE_DRAFT_FAILURE:
	  return { ...state, isFetching: false, error: true };

	default:
      return state;
  }
}

export default drafts;
