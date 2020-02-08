import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Drafts from './Drafts';
import {
  requestDrafts,
  requestDeleteDraft,
  requestEditDraft,
} from './Actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.loggedIn,
   	drafts: state.drafts.drafts,
    error: state.drafts.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(requestDrafts());
    },
    deleteFn: (id) => {
	    dispatch(requestDeleteDraft(id));
	  },
    editFn: (id) => {
      dispatch(requestEditDraft(id));
    }
  }
}

const DraftsContainer = (props) => {
  useEffect(() => {
    if(!props.drafts){
      props.onLoad();
    }
  }, [props]);

  return <Drafts {...props} />;
}

const ConnectedDrafts = connect(
  mapStateToProps,
  mapDispatchToProps
)(DraftsContainer)

export default ConnectedDrafts;
