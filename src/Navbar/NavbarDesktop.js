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
import logo from '../logo.svg';
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
    <Menu onClick={null} selectedKeys={[]} mode="horizontal" isRootMenu={true}>
      <Menu.Item key="logo"></Menu.Item>
      <span className="logo-item-desktop">
        <Link to="/" className="topnav header-logo">
          <img
            src={logo}
            height={40}
            width={40}
            alt="Blog logo"
            className="blog-logo"
          />
          <span className="blog-name">{blogName}</span>
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
       <Menu.Item key="account">
         <AccountMenu
            user={user}
            logoutFn={logoutFn}
          />
       </Menu.Item>
    </Menu>
    );

  return (
  <Menu onClick={null} selectedKeys={[]} mode="horizontal">
    <Menu.Item key="logo"></Menu.Item>
    <span className="logo-item-desktop">
      <Link to="/" className="topnav header-logo">
        <img src={logo} height={40} width={40} alt="Blog logo"/>
        <span className="blog-name">{blogName}</span>
      </Link>
    </span>
    <Menu.Item key="login" className={isFetching ? 'invisible': 'pull-right'}>
      <Link to="/login/login">
        <FontAwesomeIcon icon={signIn} />
        &nbsp; Login
      </Link>
    </Menu.Item>
    <Menu.Item key="register" className={isFetching ? 'invisible': ''}>
     <Link to="/login/register">
       <FontAwesomeIcon icon={userPlus} />
       &nbsp; Register
     </Link>
    </Menu.Item>
    <span
      className={isFetching ? 'navbar-spinner' : 'invisible'}
    >
      <Spin />
    </span>
  </Menu>
  );
}

export default Navbar;
