import React, { Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from "react-helmet";
import { Layout, Spin } from 'antd';
import { useConfig } from './Actions';
import { useUser } from '../Login/Actions';
import { getLoginData, isLoggedIn } from '../Login/utils';
import './App.css';

const { Content, Header } = Layout;

const App = (props) => {

  // Fetch user data.
  const userId = getLoginData();
  const loggedIn = isLoggedIn();

  const { user, mutate, isLoading } = useUser(userId);

  // Fetch config data.
  const { config, error } = useConfig();

  //
  const { children } = props;
  const { description, blogName } = config;
  const isMobile = useMediaQuery({query: '(max-device-width: 1224px)'});

  /*
   *  if(loggedIn) {
   * props.initializeWS();
   * }
  */

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

     <Suspense fallback={<Spin />}>
       <Layout data-testid="app-layout">
          <Header className="page-header-container">
              <Navbar {...navProps} />
          </Header>
          <Content
            className={"content-container" + isMobile ? "mobile": ""}
            data-testid="content-container"
          >
            {children}
          </Content>
       </Layout>
      </Suspense>

  </>
  );

}

export default App;
