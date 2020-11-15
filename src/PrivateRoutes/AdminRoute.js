import React from 'react';
import { Route } from 'react-router';
import {  Redirect } from 'react-router-dom';
import { isLoggedIn } from '../Login/utils';

const AdminRoute = ({ component: Component, ...rest }) => {
 const loggedIn = isLoggedIn();

 return(
 <Route
    {...rest}
    render={
      props => loggedIn ? (<Component {...props}/>) :
	    (<Redirect to={{pathname: '/login'}} />)
    }
  />
 );

}

export default AdminRoute;
