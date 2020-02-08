import Profile from './Profile';
import { connect } from 'react-redux';
import { requestPostAvatar, requestUpdateUser } from './Actions';

const mapStateToProps = (state) => {
  return {
  	user: state.session.user,
    isFetching: state.session.isFetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
	    postFile: (file) => {
        dispatch(requestPostAvatar(file));
	    },
      updateUser: (user) => {
        dispatch(requestUpdateUser(user));
      }
   }
}

const BaseViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default BaseViewContainer;
