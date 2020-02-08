import React, { Fragment } from 'react';
import { Switch, List } from 'antd';

const Action = (<Switch disabled checkedChildren="On" unCheckedChildren="Off" />);
const notificationData = [
  {
    title: 'Comments',
    description: 'Notify me when someone comments on a story I´ve created.',
    actions: [Action],
  }
];

const NotificationView = () => (
  <Fragment>
    <List
      itemLayout="horizontal"
      dataSource={notificationData}
      renderItem={item => (
        <List.Item actions={item.actions}>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  </Fragment>
);

export default NotificationView;
