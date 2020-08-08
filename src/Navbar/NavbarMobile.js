import React, { useState } from 'react';
import { Drawer, Row, Col } from 'antd';
import { Link } from 'react-router-dom'; // Replace
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from './Mobile/MobileMenu';
import AccountAvatar from '../UserAvatar/UserAvatar';

import './Navbar.css';

const menuTitleStyle = {marginLeft: '5px', fontSize:'15px'};

const Navbar = (props) => {

 const [drawerVisible, setDrawerVisible] = useState(false);

 const {
   loggedIn,
   user,
   notifications,
   notificationsEnabled,
   logoutFn,
   dismissNotifications
 } = props;

 return (
 <div className="navbar-container">
   <Drawer
     visible={drawerVisible}
     placement="right"
     onClose={() => setDrawerVisible(false)}
     title={
       loggedIn ?
       <React.Fragment>
         <AccountAvatar
           avatar={user.avatar}
           username={user.username}
           size='small'
         />
         <strong style={menuTitleStyle}>
            {user.username}
         </strong>
       </React.Fragment>
       : null
     }
     className="drawer-navbar"
   >
     <NavbarMenu
       logoutFn={logoutFn}
       loggedIn={loggedIn}
       notifications={notifications}
       notificationsEnabled={notificationsEnabled}
       user={user}
       clearFn={dismissNotifications}
       setDrawerVisible={setDrawerVisible}
     />
   </Drawer>
   <Row gutter={4}>
     <Col className="gutter-row" span={20}>
       <Link to="/" className="topnav header-logo">
         <img src={logo} alt="Blog logo" className="navbar-logo-mobile" />
         <h1 className="navbar-text-mobile">{props.blogName}</h1>
       </Link>
     </Col>
     <Col className="gutter-row" span={4}>
     </Col>
     <Col className="gutter-row" span={4}>
       <span onClick={() => setDrawerVisible(true)}>
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
