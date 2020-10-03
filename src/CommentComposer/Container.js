import { connect } from 'react-redux';
import Composer from './Composer';
//import {updateCommentText, postNewComment, updateQuoteFn} from './Actions';
import { requestPostComment } from './Actions';

const getCommentOptions = (options) => {
  const val = options.filter(o => o.key === 'comments')[0].value;
  return val;
}

const mapStateToProps = (state) => {
  const { session, config } = state;
  return {
    /*posting: state.comments.posting
    posted: state.comments.posted*/
    user: session.user,
    storyId: state.story.id,
    commentsEnabled: getCommentOptions(config.options),
    token: state.session.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postComment: (content) => {
      dispatch(requestPostComment(content));
    }
  }
}

const ConnectedCommentBox = connect(mapStateToProps, null)(Composer)

export default ConnectedCommentBox;
