import React, { Suspense, lazy } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from "react-helmet";
import Spin from 'antd/lib/spin';
import { Layout } from 'antd';
import { useConfig, loadWebsocket } from './Actions';
import { useUser } from '../Login/Actions';
import { getLoginData, isLoggedIn } from '../Login/utils';
import './App.css';

const Navbar = lazy(() => import('../Navbar/Navbar'));

const { Content, Header } = Layout;

const App = (props) => {

  // Fetch user data.
  const loggedIn = isLoggedIn();
  const userId = getLoginData();
  const { user, mutate, isLoading } = useUser(userId);

  // Fetch config data.
  const { config, error } = useConfig();

  //
  const { children } = props;
  const { description, blogName } = config;
  const isMobile = useMediaQuery({query: '(max-device-width: 1224px)'});

  if(loggedIn) {
    loadWebsocket();
  }

  if(error || !config || (loggedIn && !user))
    return null;

  const navProps = {
    mobile: isMobile,
    config: config,
    user: user ? user.user : null,
    loggedIn: loggedIn,
    isFetching: isLoading && userId!==null,
    blogName: config.blogName,
    notificationsEnabled: config.notificationsEnabled,
    notifications: [],
    mutateUser: mutate
  };

  return (
  <>

     <Helmet>
       <meta charset="utf-8" />
       <meta name="description" content={description} />
       <title>{blogName}</title>
     </Helmet>

    <Layout data-testid="app-layout">

      <Suspense fallback={<Spin />}>
        <Header className="page-header-container">
          <Navbar {...navProps} />
        </Header>
      </Suspense>

      <Suspense fallback={<Spin />}>
          <Content
            className={"content-container" + isMobile ? "mobile": ""}
            data-testid="content-container"
          >
            {children}
          </Content>
      </Suspense>

    </Layout>
  </>
  );

}

export default App;
