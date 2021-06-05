import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ApplicationRoutes from './Routes/Routes';
import AppRoute from './Routes/AppRoute';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//import reportWebVitals from './reportWebVitals';
import { SWRConfig } from 'swr';
import { fetcher }  from './store/utils';

const {App} = ApplicationRoutes;
const {Routes} = ApplicationRoutes;

const swrOptions = {
  suspense: true,
  fetcher: fetcher
};

const Morpheus = () => {

  return(
  <SWRConfig {...swrOptions}>
      <Router>
          <App>
            <Switch>
            {Routes.map(route =>
              <AppRoute
                exact={route.exact}
                path={route.path}
                component={route.component}
                isPrivate={route.private}
                key={route.path ? route.path.toString() : "-"}
              />
             )}
             </Switch>
           </App>
       </Router>
  </SWRConfig>
  );
};

//serviceWorkerRegistration.register();

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Morpheus />, rootElement);
} else {
  ReactDOM.render(<Morpheus />, rootElement);
}
