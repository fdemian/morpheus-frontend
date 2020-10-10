import React, {
  useState,
  lazy,
  Suspense
} from 'react';
import { Menu, Spin } from 'antd';
import { useUser } from '../Login/Actions';
import { getLoginData } from '../Login/utils';
import './AccountSettings.css';

// Views.
const Profile = lazy(() => import('./Profile/Profile'));
const SecurityView = lazy(() => import('./Security/SecurityView'));

const { Item } = Menu;

const getmenu = (menuMap) => {
  return Object.keys(menuMap).map(item =>
    <Item key={item}>
      {menuMap[item].name}
    </Item>
  );
};

const AccountSettings = () => {

  // Fetch user data.
  const userId = getLoginData();
  const loggedIn = userId !== null;
  let { user, mutate, isLoading } = useUser(userId);

  const props = {
    user: user.user,
    mutate: mutate,
    isLoading: isLoading
  };

  const menuMap = {
    'base': {
      name: "Profile",
      component:(
      <Suspense fallback={<Spin />}>
        <Profile {...props} />
      </Suspense>
      )
    },
    'security': {
      name: "Security",
      component:(
      <Suspense fallback={<Spin />}>
        <SecurityView {...props} />
      </Suspense>
      )
    }
  };

  const [selectKey, setSelectKey] = useState('base');

  const menuItem = menuMap[selectKey];
  const menuObject = getmenu(menuMap);
  const title = menuItem.name;
  const childComponent = menuItem.component;

  if(isLoading)
    return <Spin />;

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
