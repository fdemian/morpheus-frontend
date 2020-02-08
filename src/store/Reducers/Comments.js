import {
 POST_COMMENT,
 POST_COMMENT_OK,
 POST_COMMENT_FAILURE
} from '../../CommentComposer/Actions';

const initialState = {
  comments: [],
  posting: true,
  error: false
}

export function comments(state = initialState, action) {

 switch (action.type) {

    case POST_COMMENT:
       return {...state, posting: true};
    case POST_COMMENT_FAILURE:
       return {...state, error: true, posting: false};

    case POST_COMMENT_OK:
       const items = state.comments.concat(action.data);
       return {...state, posting:false, comments: items };

    default:
      return state;
  }

}

export default comments;
