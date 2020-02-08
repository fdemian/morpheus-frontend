import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Category from './Category';
import { requestCategory } from './Actions';

const mapStateToProps = (state) => {
  return {
    category: state.category.category,
    isFetching: state.category.isFetching,
    error: state.category.error,
    loggedIn: state.session.loggedIn,
    stories: state.category.stories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: (id) => {
	    dispatch(requestCategory(id));
	  }
  }
}

const CategoryContainer = (props) => {

  useEffect(() => {
    const { params } = props.match;
    const { category, isFetching } = props;
    const paramsId = parseInt(params.id, 10);
    const propsId = props.category !== null ? props.category.id : -2;
    const mustFetch = (
     (category === null || category === undefined) &&
     (propsId !== paramsId)
    );

    if(mustFetch && !isFetching) {
      props.onLoad(paramsId);
    }
  }, [props, props.id, props.category]);

  return <Category {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
