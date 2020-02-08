import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { REQUEST_STORY, REGISTER_TEMP_USER } from './Actions';
import Story from './Story';
import getOptionsValues from '../utils/misc';

const mapStateToProps = (state) => {
  return {
    story: state.story,
    isFetching: state.story.isFetching,
    error: state.story.error,
    loggedIn: state.session.loggedIn,
    oauthServices: state.config.oauth,
    commentOptions: getOptionsValues(state.config.options, 'comments'),
    userExists: state.session.user.loaded
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: (storyId) => {
	    dispatch({type: REQUEST_STORY, Id: storyId});
	  },
    setAnonymousUser: (user) => {
      dispatch({type: REGISTER_TEMP_USER, data: user});
    }
  }
}

const StoryContainer = (props) => {
  useEffect(() => {
    const { story } = props;
    const { params } = props.match
    const { content } = story;
    const paramsId = parseInt(params.id, 10);
    const mustFetch = ((story.id !== paramsId) || (content === null));
    if(mustFetch && !props.isFetching){
      props.onLoad(params.id);
    }
  }, [props, props.id, props.story.content]);

  return <Story {...props} />;
}


export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);
