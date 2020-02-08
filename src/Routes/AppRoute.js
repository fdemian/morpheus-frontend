import React, { Suspense } from "react";
import Loading from '../Loading/LoadingIndicator';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AppRoute = ({exact, path, component, isPrivate, isAuthenticated, key}) => {

  if(isPrivate && !isAuthenticated)
    return  <Redirect to='/login' />;
  else return (
  <Suspense fallback={<Loading />}>
    <Route
      exact={exact}
      path={path}
      component={component}
      key={key}
    />
  </Suspense>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.session.loggedIn
  }
}

export default connect(mapStateToProps, null)(AppRoute);
