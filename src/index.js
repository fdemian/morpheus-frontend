import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ApplicationRoutes from './Routes/Routes';
import AppRoute from './Routes/AppRoute';
import { Provider } from 'react-redux';
import store from './store/Configure';
import { REQUEST_CONFIG_DATA } from './App/Actions';
import register from './registerServiceWorker';

const {App} = ApplicationRoutes;
const {Routes} = ApplicationRoutes;

const Morpheus = () => {

  // Initial configuration.
  store.dispatch({ type: REQUEST_CONFIG_DATA });

  return(
  <div>
    <Provider store={store}>
      <Router>
          <App>
            <Switch>
            {Routes.map(route =>
              <AppRoute
                exact={route.exact}
                path={route.path}
                component={route.component}
                isPrivate={route.private}
                key={route.path}
                />
             )}
             </Switch>
           </App>
       </Router>
    </Provider>
  </div>
  );
};

ReactDOM.render(<Morpheus />, document.getElementById('root'));
register();
