import SecurityView from './SecurityView';
import { connect } from 'react-redux';
import { requestChangePassword, clearPasswordErrors } from './Actions';
import { requestUpdateUser } from '../Profile/Actions';
import { requestUpdateSec } from './Actions';
import getOptionsValues from '../../utils/misc';

const mapStateToProps = (state) => {
  return {
  	user: state.session.user,
    isFetching: state.session.isFetching,
    isFetchingConfig: state.config.isFetching,
    error: state.session.error,
    validated: state.session.validated,
    commentsEnabled: getOptionsValues(state.config.options, 'comments'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
     modifyPassword(currentPass, newPass){
       dispatch(requestChangePassword(currentPass, newPass));
     },
     clearPasswordErrors(){
       dispatch(clearPasswordErrors());
     },
     updateUser(user){
       dispatch(requestUpdateUser(user));
     },
     updateSecInfo(secInfo){
       dispatch(requestUpdateSec(secInfo));
     }
   }
}

const SecurityViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecurityView)

export default SecurityViewContainer;
