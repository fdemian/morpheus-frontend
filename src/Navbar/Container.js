import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../Authentication/Actions';
import {
   markNotificationsAsRead,
   dismissNotifications,
   markReadNotification
 } from './Actions';

import { REQUEST_INITIALIZE_WS } from '../App/Actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.loggedIn,
	  user: state.session.user,
    isFetching: state.session.isFetching,
    notifications: state.session.notifications,
    notificationsEnabled: state.config.notificationsEnabled,
    blogName: state.config.blogName
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logoutFn: () => {
      dispatch(logout());
    },
    markNotificationsAsRead: () => {
      dispatch(markNotificationsAsRead());
    },
    dismissNotifications: () => {
      dispatch(dismissNotifications());
    },
    markReadNotification: (notification) => {
      dispatch(markReadNotification(notification));
    },
    initializeWS: () => {
      dispatch({type: REQUEST_INITIALIZE_WS });
    }
  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
