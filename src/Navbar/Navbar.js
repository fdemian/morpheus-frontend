import React, {
  lazy,
  Suspense
} from 'react';
import { useUser } from '../Login/Actions';
import Spin from 'antd/lib/spin';
import Affix from 'antd/lib/affix';

const NavbarDesktop = lazy(() => import('./NavbarDesktop'));
const NavbarMobile = lazy(() => import('./NavbarMobile'));

const Navbar = (props) => {

  const { mobile } = props;
  const { user, mutate } = useUser();

  mutate(user);

  if(user && props.user){
    props.user = user;
  }

  if(mobile)
    return (
    <Suspense fallback={<Spin />}>
        <NavbarMobile {...props} />
    </Suspense>
    ) ;

    return (
    <Suspense fallback={<Spin />}>
      <Affix>
        <NavbarDesktop {...props} />
      </Affix>
    </Suspense>
  );

}

export default Navbar;
