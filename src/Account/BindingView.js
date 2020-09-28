import React from 'react';
import { List } from 'antd';
import './AccountSettings.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';

const bindData = [
  {
    title: "Facebook",
    description: "Bind your Facebook account.",
    actions: [<a href="/">Bind</a>],
    avatar: <FontAwesomeIcon icon={faFacebook} size="lg" color="#4267b2" />
  },
  {
    title: "Github",
    description: "Bind your Github account.",
    actions: [<a href="/">Bind</a>],
    avatar: <FontAwesomeIcon icon={faGithub} size="lg" color="#000" />
  },
  {
    title: "Google",
    description: "Bind your Google account.",
    actions: [<a href="/">Bind</a>],
    avatar: <FontAwesomeIcon icon={faGoogle} size="lg" color="#df5138" />
  }
];

const BindingView = () => (
<>
  <List
    itemLayout="horizontal"
    dataSource={bindData}
    renderItem={item => (
      <List.Item actions={item.actions}>
        <List.Item.Meta
          avatar={item.avatar}
          title={item.title}
          description={item.description}
        />
      </List.Item>
    )}
  />
</>
)

export default BindingView;
