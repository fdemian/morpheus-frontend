import React, {
  lazy,
  Suspense
} from 'react';
import { Spin, Affix } from 'antd';

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
      <Affix>
        <NavbarDesktop {...props} />
      </Affix>
    </Suspense>
  );

}

export default Navbar;
