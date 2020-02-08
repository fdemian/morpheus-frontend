import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { GET_DRAFT } from '../Drafts/Actions';
import Story from '../Story/Story';

const mapStateToProps = (state) => {
  return {
    story: state.story,
    isFetching: state.story.isFetching,
    error: state.story.error,
    loggedIn: state.session.loggedIn,
    oauthServices: state.config.oauth,
    commentOptions: [],
    userExists: state.session.user.loaded
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: (id) => {
	    dispatch({type: GET_DRAFT, Id: id});
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

  if(!props.loggedIn)
    return <h1>Must be logged in to view drafts</h1>;

  return <Story {...props} />;
}


export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);
