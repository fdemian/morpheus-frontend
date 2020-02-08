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

export function composer(state = initialState, action) {

 switch (action.type) {

   /* */
   case SEND_STORY:
      return {...state, posting: true, posted: false};
   case SEND_STORY_FAILURE:
      return {...state, posting: false, posted: false, error: true};
   case SEND_STORY_OK:
      const { id } = action.data;
      return { ...state, posted: true, id: id, posting: false};

   case REQUEST_STORY_EDIT:
      return {...state, id: action.id, editing: true, story: action.story };

   case EDIT_STORY:
      return {...state, story: action.data };
   case EDIT_STORY_FAILURE:
      return {...state, posting: false, posted: false, error: true};
   case EDIT_STORY_OK:
      const _id = action.data.id;
      return { ...state, posted: true, id: _id, posting: false, editing: false, story: null };

   case CLEAR_COMPOSER:
      return {
        ...state,
        id:-1,
        posted: false,
        editing: false,
        posting: false,
        error: false,
        story: null
      };

   default:
	    return state;
 }
}

export default composer;
