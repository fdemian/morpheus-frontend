import React from 'react';
import { Menu , Spin } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt as signIn,
  faUserPlus as userPlus
} from '@fortawesome/free-solid-svg-icons';
import AccountMenu from './AccountMenu/Container';
import Notifications from './Notifications';
import logo from '../logo.png';
import './Navbar.css';

const Navbar = (props) => {

  const {
    loggedIn,
    user,
    notifications,
    /*notificationsEnabled,*/
    markReadNotification,
    isFetching,
    logoutFn,
    dismissNotifications,
    blogName
  } = props;

  if(loggedIn)
   return(
   <Menu mode="horizontal">
     <Menu.Item></Menu.Item>
     <span className="logo-item-desktop">
       <Link to="/" className="topnav header-logo">
         <img
           src={logo}
           alt={blogName + " logo"}
           className="blog-logo"
         />
       </Link>
     </span>
     <span className="pull-right">
        <Notifications
           notifications={notifications}
           clearFn={dismissNotifications}
           markRead={markReadNotification}
           dismiss={dismissNotifications}
        />
     </span>
     <span>
      <AccountMenu
         user={user}
         logoutFn={logoutFn}
       />
     </span>
  </Menu>
  );

  return(
  <Menu mode="horizontal">
    <Menu.Item></Menu.Item>
    <span className="logo-item-desktop">
       <Link to="/" className="topnav header-logo">
         <img
           src={logo}     
           alt={blogName + " logo"}
           className="blog-logo"
         />
       </Link>
    </span>
    <span className="pull-right">
      <span className={isFetching ? 'invisible': ''}>
        <Link to="/login/login">
          <FontAwesomeIcon icon={signIn} />
           Login
        </Link>
        <Link to="/login/register">
          <FontAwesomeIcon icon={userPlus} />
          Register
        </Link>
      </span>
      <span className={isFetching ? 'navbar-spinner' : 'invisible'}>
       <Spin />
      </span>
    </span>
  </Menu>
  );

}

export default Navbar;
