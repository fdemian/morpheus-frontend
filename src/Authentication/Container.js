import { connect } from 'react-redux';
import Authentication from './Authentication';
import { startAuth } from './Actions';

const mapStateToProps = (state) => {
  return {
     user: state.session.user,
     isFetching: state.session.isFetching,
     error: state.session.error,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    performAuth: (type, token, redirectURL, username, password) => {
	    dispatch(startAuth(type, token, redirectURL, username, password));
	  }
  }
}

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication)

export default AuthContainer;
