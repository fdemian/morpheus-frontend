import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import  Stories from './Stories';
import { requestStories, requestDeleteStory, requestEditStory } from './Actions';
import { requestCategories } from '../Categories/Actions';

export const mapStateToProps = (state) => {
  return {
   stories: state.stories.stories,
	 isFetching: state.stories.isFetching,
	 error: state.stories.error,
	 loggedIn: state.session.loggedIn,
	 userRole: state.session.user.role
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(requestStories());
      dispatch(requestCategories());
	  },
	  onDelete: (id) => {
      dispatch(requestDeleteStory(id));
	  },
	  onEditClick: (id, stories) => {
      dispatch(requestEditStory(id, stories));
	  }
  }
}

const StoriesContainer = (props) => {
  useEffect(() => {
    if(!props.stories && !props.isFetching){
      props.onLoad();
    }
  }, [props, props.stories]);

  return <Stories {...props} />;

}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesContainer);
