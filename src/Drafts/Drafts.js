import React from 'react';
import { Table } from 'antd';
import GridContent from '../PageHeaderWrapper/GridContent';
import DraftLink from './DraftLink';
import CategoryLink from './DraftCategoryLink';
import DeleteRow from './DeleteRow';
import './Drafts.css';

const Drafts = (props) => {

  const { drafts, loggedIn, deleteFn } = props;
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
        render: (row) => <DeleteRow id={row.id} deleteFn={deleteFn} loggedIn={loggedIn} />
    }
  ];

  if(!drafts)
    return null;

  return(
  <div className="drafts-container">
    <GridContent>

      <div className="drafts-title">
       <p>Drafts</p>
      </div>

      <div className="drafts-table">
        <Table
          dataSource={drafts}
          columns={columns}
          pagination={false}
          locale={{emptyText:'There are no drafts.'}}
        />
      </div>

    </GridContent>
  </div>
  );
}

export default Drafts;
