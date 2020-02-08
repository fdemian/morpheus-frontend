import React from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = (props) => {

  const { mobile } = props;
  
  if(mobile)
    return <NavbarMobile {...props} />;

  return <NavbarDesktop {...props} />;

}

export default Navbar;
