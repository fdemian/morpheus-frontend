import React from 'react';
import { Table } from 'antd';

import DeleteRow from './DeleteRow';
import CategoryLink from './CategoryLink';
import NewCategoryForm from './NewCategoryForm';
import GridContent from '../PageHeaderWrapper/GridContent';

import './Categories.css';

const Categories = (props) => {

  const {categories, loggedIn, deleteFn, createFn} = props;

  const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, row) => <CategoryLink category={row} />,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: ' ',
        dataIndex: '',
        key: 'x',
        render: (row) => <DeleteRow id={row.id} deleteFn={deleteFn} loggedIn={loggedIn} />
    }];

    return(
    <div className="categories-container">
      <GridContent>

        <div className="CategoriesTitle">
         <p>Categories</p>
        </div>

        <NewCategoryForm loggedIn={loggedIn} createFn={createFn} />

        <div className="CategoriesTable">
          <Table
            dataSource={categories}
            columns={columns}
            pagination={false}
            locale={{emptyText:'No categories available.'}}
          />
        </div>

      </GridContent>
    </div>
    );

}

export default Categories;
