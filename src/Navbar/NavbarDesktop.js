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
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt as signIn,
  faUserPlus as userPlus
} from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.png';
import './Navbar.css';

const AccountMenu = lazy(() => import('./AccountMenu/Container'));
const Notifications = lazy(() => import('./Notifications'));

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
   <Suspense fallback={<Spin />}>
     <Menu mode="horizontal" key="parent.menu.logged">
       <Menu.Item key="item.empty.logged"></Menu.Item>
       <span className="logo-item-desktop" key="logo-item-desktop">
         <Link to="/" className="topnav header-logo">
           <img
             src={logo}
             alt={blogName + " logo"}
             className="blog-logo"
           />
         </Link>
       </span>
       <span className="pull-right" >
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
  </Suspense>
  );

  return(
  <Suspense fallback={<Spin />}>
    <Menu mode="horizontal" key="parent.menu.not.logged">
      <Row>
        <Col span={8}>
          <Menu.Item key="item.empty.not.logged"></Menu.Item>
          <span className="logo-item-desktop" key="logo-item-desktop">
             <Link to="/" className="topnav header-logo">
                <Suspense fallback={<Spin />}>
                 <img
                   src={logo}     
                   alt={blogName + " logo"}
                   className="blog-logo"
                 />
                </Suspense>
             </Link>
          </span>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
          <span>
           {
             isFetching ? <Spin /> :
             (
              <span key="login-items">
                 <Link to="/login/login">
                    <FontAwesomeIcon icon={signIn} />
                    Login
                 </Link>
                 <Link to="/login/register">
                   <FontAwesomeIcon icon={userPlus} />
                   Register
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
