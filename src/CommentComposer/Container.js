import { connect } from 'react-redux';
import Composer from './Composer';
//import {updateCommentText, postNewComment, updateQuoteFn} from './Actions';

const mapStateToProps = (state) => {
  const { session, config } = state;
  return {
    /*posting: state.comments.posting
    posted: state.comments.posted*/
    user: session.user,
    storyId: state.story.id,
    token: state.session.token
  }
}

const ConnectedCommentBox = connect(mapStateToProps, null)(Composer)

export default ConnectedCommentBox;
