import React, {
  lazy,
  Suspense
} from 'react';
import { Spin } from 'antd';

const NavbarDesktop = lazy(() => import('./NavbarDesktop'));
const NavbarMobile = lazy(() => import('./NavbarMobile'));

const Navbar = (props) => {

  const { mobile } = props;

  if(mobile)
    return (
    <Suspense fallback={<Spin />}>
      <NavbarMobile {...props} />
    </Suspense>
    ) ;

    return (
    <Suspense fallback={<Spin />}>
      <NavbarDesktop {...props} />
    </Suspense>
  );

}

export default Navbar;
