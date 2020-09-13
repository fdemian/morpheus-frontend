import React, { useState } from 'react';
import { Menu } from 'antd';

// Views.
import BaseView from './Profile/Container';
import SecurityView from './Security/Container';
//import BindingView from './BindingView';
//import NotificationView from './NotificationView'

import './Info.css';

const { Item } = Menu;

const getmenu = (menuMap) => {
  return Object.keys(menuMap).map(item =>
    <Item key={item}>{menuMap[item].name}
  </Item>
  );
};

const AccountSettings = () => {

  const menuMap = {
    'base': {
      name: "Profile",
      component: <BaseView />
    },
    'security': {
      name: "Security",
      component:  <SecurityView />
    }/*,
    'binding': {
      name:"Binding Accounts",
      component:  <BindingView />
    },
    'notification': {
      name: "Notifications",
      component: <NotificationView />
    }*/
  };

  const [selectKey, setSelectKey] = useState('base');

  const menuItem = menuMap[selectKey];
  const menuObject = getmenu(menuMap);
  const title = menuItem.name;
  const childComponent = menuItem.component;

  return (
  <div className="settings-container">
      <div className="info-main">
        <div className="leftmenu">
          <Menu
              mode={'inline'}
              selectedKeys={[selectKey]}
              onClick={(k) => setSelectKey(k.key)}
            >
            {menuObject}
          </Menu>
        </div>
        <div className="right">
          <div className="title">{title}</div>
            {childComponent}
        </div>
      </div>
  </div>
  );
}

export default AccountSettings;
