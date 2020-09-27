import { connect } from 'react-redux'
import login, {requestRegister}  from './Actions';
import Login from './Login';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.loggedIn,
   	error: state.session.error,
   	message: state.session.errorMessage,
    oauthServices: state.config.oauth,
    loading: state.session.isFetching,
    validated: state.session.validated,
    registered: state.session.registered,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticate: (user, password) => {
	    dispatch(login(user, password));
	  },
    register: (type, code, values, redirectURL) => {
      dispatch(requestRegister(type, code, values, redirectURL));
    }
  }
}

const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default ConnectedLogin;
