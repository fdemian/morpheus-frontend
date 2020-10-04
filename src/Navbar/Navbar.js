import React, {
  lazy,
  Suspense
} from 'react';
import { Spin } from 'antd';
import { useUser } from '../Login/Actions';
import { getLoginData } from '../Login/utils';

const NavbarDesktop = lazy(() => import('./NavbarDesktop'));
const NavbarMobile = lazy(() => import('./NavbarMobile'));

const Navbar = (props) => {

  if(props.loggedIn) {
    props.initializeWS();
  }

  const userId = getLoginData();
  const loggedIn = userId !== null;
  const user = useUser(userId);

  const { mobile } = props;

  if(mobile)
    return (
    <Suspense fallback={<Spin />}>
      <NavbarMobile {...props} user={user} loggedIn={loggedIn} />
    </Suspense>
    ) ;

    return (
    <Suspense fallback={<Spin />}>
      <NavbarDesktop {...props} user={user} loggedIn={loggedIn} />
    </Suspense>
  );

}

export default Navbar;
