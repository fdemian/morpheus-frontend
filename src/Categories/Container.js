import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Categories from './Categories';
import {
  requestDeleteCategory,
  requestCreateCategory,
  requestCategories,
} from './Actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.loggedIn,
   	categories: state.categories.items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(requestCategories());
    },
    deleteFn: (id) => {
	    dispatch(requestDeleteCategory(id));
	  },
    createFn: (name, description) => {
      dispatch(requestCreateCategory(name, description));
    }
  }
}

const CategoriesContainer = (props) => {
  useEffect(() => {
    props.onLoad();
  }, [props]);

  return <Categories {...props} />;
}

const ConnectedCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer)

export default ConnectedCategories;
