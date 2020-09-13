import React, {
  lazy,
  Suspense
} from 'react';

const LoginMenu = lazy(() => import('./LoginMenu'));
const AccountMenu = lazy(() => import('./AccountMenu'));

const NavbarMenu = (props) => {

  const {
    logoutFn,
    loggedIn,
    notifications,
    notificationsEnabled,
    user,
    clearFn,
    setDrawerVisible
  } = props;

  if(loggedIn)
    return(
    <Suspense fallback={<p>Loading</p>}>
      <AccountMenu
        user={user}
        logoutFn={logoutFn}
        notifications={notifications}
        notificationsEnabled={notificationsEnabled}
        clearFn={clearFn}
        setDrawerVisible={setDrawerVisible}
      />
    </Suspense>
    )

   return (
  <Suspense fallback={<p>Loading</p>}>
     <LoginMenu setDrawerVisible={setDrawerVisible} />
  </Suspense>
   );
}

export default NavbarMenu;
