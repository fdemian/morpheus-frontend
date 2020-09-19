import React, {
  lazy,
  useState,
  Suspense
} from 'react';
import { Drawer, Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom'; // Replace
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from './Mobile/MobileMenu';

import './Navbar.css';

const AccountAvatar = lazy(() => import('../UserAvatar/UserAvatar'));

const Navbar = (props) => {

 const [drawerVisible, setDrawerVisible] = useState(false);
 const closeDrawer = () => setDrawerVisible(false);
 const openDrawer = () => setDrawerVisible(true);

 const {
   loggedIn,
   user,
   notifications,
   notificationsEnabled,
   logoutFn,
   dismissNotifications
 } = props;

 return (
 <div className="navbar-container navbar-mobile">
   <Drawer
     visible={drawerVisible}
     placement="right"
     onClose={closeDrawer}
     title={
       loggedIn ?
       <>
           <AccountAvatar
             avatar={user.avatar}
             username={user.username}
             size='small'
           />
           <strong className="menu-title">
              {user.username}
           </strong>
       </>
       : null
     }
     className="drawer-navbar"
   >
    <Suspense fallback={<Spin />}>
       <NavbarMenu
         logoutFn={logoutFn}
         loggedIn={loggedIn}
         notifications={notifications}
         notificationsEnabled={notificationsEnabled}
         user={user}
         clearFn={dismissNotifications}
         setDrawerVisible={setDrawerVisible}
       />
     </Suspense>
   </Drawer>
   <Row gutter={4}>
     <Col className="gutter-row" span={20}>
       <Link to="/" className="topnav header-logo">
         <img
            src={logo}
            alt={props.blogName + " logo"}
            className="navbar-logo-mobile"
          />
       </Link>
     </Col>
     <Col className="gutter-row" span={4}>
     </Col>
     <Col className="gutter-row" span={4}>
       <span onClick={openDrawer}>
         <FontAwesomeIcon
             icon={faBars}
             size="lg"
             color="gainsboro"
          />
       </span>
     </Col>
   </Row>
 </div>
 );

}

export default Navbar;
