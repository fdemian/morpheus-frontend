import React from 'react';
import { Table } from 'antd';
import DraftLink from './DraftLink';
import CategoryLink from './DraftCategoryLink';
import DeleteRow from './DeleteRow';
import { isLoggedIn } from '../Login/utils';
import { deleteStory } from '../Stories/Actions';
import { useDrafts } from './Actions';

import './Drafts.css';

const Drafts = () => {

  const loggedIn = isLoggedIn();
  const { drafts } = useDrafts();

  const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, row) => <DraftLink draft={row} />,
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text, row) => <CategoryLink category={row.category} />
    },
    {
        title: ' ',
        dataIndex: '',
        key: 'x',
        render: (row) =>
        <DeleteRow
          id={row.id}
          deleteFn={deleteStory}
          loggedIn={loggedIn}
        />
    }
  ];

  if(!drafts)
    return null;

  return(
  <div className="drafts-container">
      <div className="drafts-title">
       <p role="aria-readonly">Drafts</p>
      </div>

      <div className="drafts-table">
        <Table
          dataSource={drafts.items}
          columns={columns}
          pagination={false}
          locale={{emptyText:"There are no drafts."}}
        />
      </div>
  </div>
  );
}

export default Drafts;
