import React, {
  lazy,
  Suspense
} from 'react';
import { Menu, Spin } from 'antd';
import NavLogo from './NavLogo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt as signIn } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.png';
import './Navbar.css';

const AccountMenu = lazy(() => import('./AccountMenu/AccountMenu'));
const Notifications = lazy(() => import('./Notifications'));

const Navbar = (props) => {

  const {
    loggedIn,
    user,
    notifications,
    /*notificationsEnabled,*/
    markReadNotification,
    isFetching,
    dismissNotifications,
    blogName,
    mutateUser
  } = props;

  if(loggedIn)
  return(
  <Suspense fallback={<Spin />}>
    <Menu
      mode="horizontal"
      key="parent.menu.not.logged"
      role="menu"
      aria-label="Navbar"
      className="desktop-menu"
    >
      <span className="logo-item-desktop" key="logo-item-desktop" role="menuitem">
         <NavLogo mobile={false} blogName={props.blogName} />
      </span>
       <span className="account-nav-items"  role="menuitem">
        <Notifications
           notifications={notifications}
           clearFn={dismissNotifications}
           markRead={markReadNotification}
           dismiss={dismissNotifications}
         />
        <AccountMenu user={user} mutate={mutateUser} />
       </span>
    </Menu>
  </Suspense>
  );


  return(
  <Suspense fallback={<Spin />}>
    <Menu
      mode="horizontal"
      key="parent.menu.not.logged"
      role="menu"
      aria-label="Navbar"
      className="desktop-menu"
    >
      <span className="logo-item-desktop" key="logo-item-desktop" role="menuitem">
         <NavLogo mobile={false} blogName={props.blogName} />
      </span>

      <span className="login-items"  role="menuitem">
       {
         isFetching ? <Spin /> :
         (
          <Link to="/login">
            <FontAwesomeIcon icon={signIn} />
            Login
          </Link>
          )
       }
      </span>
    </Menu>
  </Suspense>
  );

}

export default Navbar;
