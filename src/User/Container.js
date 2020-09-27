import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  requestUserInfo,
  requestUserStories
} from './Actions';
import User from './User';

export const mapStateToProps = (state) => {
  return {
    stories: state.user.stories,
	  isFetching: state.user.isFetching,
	  error: state.user.error,
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: (id) => {
	    dispatch(requestUserInfo(id));
      dispatch(requestUserStories(id));
	  }
  }
}

const UserContainer = (props) => {

  useEffect(() => {
    const { id } = props.match.params;
    const { user, isFetching } = props;

    if(user === null && !isFetching){
      props.onLoad(id);
    }

  }, [props, props.id]);

  return <User {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
