import React, {
  lazy,
  Suspense
} from 'react';
import {
  Menu ,
  Spin,
  Row,
  Col
} from 'antd';
import NavLogo from './NavLogo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt as signIn,
/*  faUserPlus as userPlus*/
} from '@fortawesome/free-solid-svg-icons';
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
    <Menu mode="horizontal" key="parent.menu.not.logged">
      <Row>
        <Col span={8}>
          <span className="logo-item-desktop" key="logo-item-desktop">
             <NavLogo mobile={false} blogName={props.blogName} />
          </span>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
         <span className="account-nav-items">
          <Notifications
             notifications={notifications}
             clearFn={dismissNotifications}
             markRead={markReadNotification}
             dismiss={dismissNotifications}
           />
           <>
             <AccountMenu user={user} mutate={mutateUser} />
           </>
         </span>
        </Col>
      </Row>
    </Menu>
  </Suspense>
  );


  return(
  <Suspense fallback={<Spin />}>
    <Menu mode="horizontal" key="parent.menu.not.logged">
      <Row>
        <Col span={8}>
          <span className="logo-item-desktop" key="logo-item-desktop">
              <NavLogo mobile={false} blogName={props.blogName} />
          </span>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
          <span className="login-items">
           {
             isFetching ? <Spin /> :
             (
              <span key="login-items">
                 <Link to="/login">
                    <FontAwesomeIcon icon={signIn} />
                    Login
                 </Link>
              </span>
              )
           }
          </span>
        </Col>
      </Row>


    </Menu>
  </Suspense>
  );

}

export default Navbar;
