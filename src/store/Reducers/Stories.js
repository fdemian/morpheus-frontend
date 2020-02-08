import
{
  GET_STORIES,
  RECEIVE_STORIES,
  RECEIVE_STORIES_FAILURE,
  DELETE_STORY,
  DELETE_STORY_OK,
  DELETE_STORY_FAILURE
} from '../../Stories/Actions';

import { NEW_STORY } from '../../Composer/Actions';

import deepCopy from '../../utils/copy';

const initialStoriesState = {
  stories: null,
  isFetching: false,
  error: false
}

export function topics(state = initialStoriesState, action) {

 switch (action.type) {

  case GET_STORIES:
	  return { ...state, isFetching: true }

  case RECEIVE_STORIES:
	  return {
      ...state,
      stories: action.data.items,
      isFetching: false,
      error: false
    }

	case RECEIVE_STORIES_FAILURE:
	  return { ...state, isFetching: false, error: true }

  case DELETE_STORY:
	  return { ...state };

  case DELETE_STORY_OK:
    const id = parseInt(action.data.id, 10);
    const updatedStories = state.stories.filter(element => element.id !== id);
	  return { ...state, stories: updatedStories, error: false };

	case DELETE_STORY_FAILURE:
	  return { ...state, isFetching: false, error: true };

  case NEW_STORY:
    const _stories = deepCopy(state.stories);
    _stories.push(action.story);

    return { ...state, stories: _stories };

	default:
      return state;
  }
}

export default topics;
