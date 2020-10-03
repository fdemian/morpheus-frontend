import SecurityView from './SecurityView';
import { connect } from 'react-redux';
import { requestChangePassword, clearPasswordErrors } from './Actions';
import { requestUpdateUser } from '../Profile/Actions';
import { requestUpdateSec } from './Actions';


const mapStateToProps = (state) => {
  return {
  	user: state.session.user,
    validated: state.session.validated,
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
