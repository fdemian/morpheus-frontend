import React, {
  lazy,
  Suspense
} from 'react';
import { Spin } from 'antd';
import { useUser } from '../Login/Actions';
import { getLoginData } from '../Login/utils';
import { logout } from '../Login/utils';

const NavbarDesktop = lazy(() => import('./NavbarDesktop'));
const NavbarMobile = lazy(() => import('./NavbarMobile'));

const Navbar = (props) => {

  if(props.loggedIn) {
    props.initializeWS();
  }

  const userId = getLoginData();
  const loggedIn = userId !== null;
  const { user, isLoading } = useUser(userId);

  const { mobile } = props;

  const newProps = {
    user: user ? user.user : null,
    loggedIn: loggedIn,
    isFetching: isLoading && userId!==null,
    logoutFn: logout
  };

  console.clear();
  console.log(":::::");
  console.log(newProps);

  if(mobile)
    return (
    <Suspense fallback={<Spin />}>
      <NavbarMobile {...props} {...newProps} />
    </Suspense>
    ) ;

    return (
    <Suspense fallback={<Spin />}>
      <NavbarDesktop {...props} {...newProps} />
    </Suspense>
  );

}

export default Navbar;
