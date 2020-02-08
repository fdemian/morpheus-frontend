import React from 'react';
import { Route } from 'react-router';
import {  Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, store, ...rest }) => {

 const state = store.getState();
 const { session } = state;
 const { loggedIn, user } = session;
 const willRedirect = (loggedIn && user.role === "author");

 return(
 <Route
    {...rest}
    render={
      props => willRedirect ? (<Component {...props}/>) :
	    (<Redirect to={{pathname: '/login', state: { from: props.location }}} />)
    }
  />
 );

}

export default AdminRoute;
