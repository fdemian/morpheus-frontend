import
{
  REQUEST_STORY,
  RECEIVE_STORY,
  RECEIVE_STORY_FAILURE,
}
from '../../Story/Actions';

import { POST_COMMENT_OK } from '../../CommentComposer/Actions';

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

export function story(state = initialState, action) {
 switch (action.type) {
    case REQUEST_STORY:
	     return { ...state, isFetching: true, error:false };
    case RECEIVE_STORY:
       const {
         id,
         title,
         category,
         content,
         author,
         comments,
         tags,
         date,
         is_draft
       } = action.data;
	     return {
         ...state,
         isFetching: false,
         id: id,
         title: title,
         category: category,
         content: content,
         author: author,
         comments: comments,
         tags: tags,
         date: date,
         isDraft: is_draft
       };
    case RECEIVE_STORY_FAILURE:
	     return { ...state, isFetching: false, error:true };

    // TODO: maybe this does not belong here.
    case POST_COMMENT_OK:
       const items = state.comments.concat(action.data);
       return {...state, comments: items };

    default:
      return state;
  }
}

export default story;
