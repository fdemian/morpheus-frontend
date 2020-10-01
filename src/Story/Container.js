import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { REQUEST_STORY, REGISTER_TEMP_USER } from './Actions';
import Story from './SWRComponent';
import getOptionsValues from '../utils/misc';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.loggedIn,
    oauthServices: state.config.oauth,
    commentOptions: getOptionsValues(state.config.options, 'comments'),
    userExists: state.session.user.loaded
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setAnonymousUser: (user) => {
      dispatch({type: REGISTER_TEMP_USER, data: user});
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Story);
