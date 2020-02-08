import React from 'react';
import Navbar from '../Navbar/Container';
import { Layout, Affix } from 'antd';
import './App.css';

const {Content, Header } = Layout;

const LayoutDesktop = ({children}) => {

  return (
  <Layout>

	  <Header className="page-header-container">
      <Affix>
	     <Navbar mobile={false} />
      </Affix>
	  </Header>

	  <Content className="content-container">
	    {children}
	  </Content>

  </Layout>
  );

}

export default LayoutDesktop;
