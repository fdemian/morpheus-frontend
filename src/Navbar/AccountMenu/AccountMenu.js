import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import AccountAvatar from '../../UserAvatar/UserAvatar';

// Font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus as plus,
  faAddressCard as addressCard,
  faCog as cog,
  faSignOutAlt as signOut,
  faPenNib as draftIcon
} from '@fortawesome/free-solid-svg-icons';
import './AccountMenu.css';

const userNameStyle = {
  textAlign:'center',
  color: 'rgba(0,0,0,.65)',
  fontSize: '20px',
  marginLeft: '10px',
  verticalAlign: 'text-bottom'
};

const hrLineStyle = {
   height: '12px',
   border: '0',
   borderTop: '1px solid rgba(0, 0, 0, 0.1)',
   borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
};

const AccountMenu = ({ logoutFn, user, isFetching }) => {

  const menu = (
    <Menu className="AccountDropdownMenu">
      <Menu.Item key="account:0" disabled={true}>
        <AccountAvatar
          avatar={user.avatar}
          username={user.username}
          shape='circle'
          size='medium'
        />
        <span style={userNameStyle}>
          {user.username}
        </span>
      </Menu.Item>
      <hr style={hrLineStyle} />
      <Menu.Item key="account:newstory">
        <Link to="/stories/new">
          <FontAwesomeIcon
            icon={plus}
            className="MenuIcon"
            size="lg"
          />
          &nbsp; New Story
        </Link>
      </Menu.Item>
      <Menu.Item key="account:categories">
        <Link to="/categories">
         <FontAwesomeIcon
            icon={addressCard}
            className="MenuIcon"
            size="lg"
          />
          &nbsp; Categories
        </Link>
      </Menu.Item>
      <Menu.Item key="account:draft">
        <Link to="/drafts">
          <FontAwesomeIcon
            icon={draftIcon}
            className="MenuIcon"
            size="lg"
          />
          &nbsp; Drafts
        </Link>
      </Menu.Item>
      <Menu.Item key="account:settings">
        <Link to="/settings">
          <FontAwesomeIcon
            icon={cog}
            className="MenuIcon"
            size="lg"
          />
          &nbsp; Settings
        </Link>
      </Menu.Item>
      <Menu.Item key="account:logout">
        <span onClick={() => logoutFn()}>
          <FontAwesomeIcon
            icon={signOut}
            className="MenuIcon"
            size="lg"
          />
          &nbsp; Log out
        </span>
      </Menu.Item>
    </Menu>
  );

  return(
  <Dropdown overlay={menu} placement="bottomCenter">
    <span className="UserMenuAvatar">
      <AccountAvatar
        avatar={user.avatar}
        username={user.username}
        size='medium'
        shape='circle'
      />
      <span className="navbar-text">
      {user.username}
      </span>
    </span>
  </Dropdown>
  )

}

export default AccountMenu;
