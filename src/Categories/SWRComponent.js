import React from 'react';
import { Table } from 'antd';
import _data from './initialData';
import {
  createCategory,
  deleteCategory
 } from './Api';
import DeleteRow from './DeleteRow';
import CategoryLink from './CategoryLink';
import NewCategoryForm from './NewCategoryForm';
import useSWR, { mutate } from 'swr';

import './Categories.css';

const Categories = (props) => {

  const {
    loggedIn,
    token
  } = props;

  const { data } = useSWR('/api/categories', { initialData: _data });
  const categories = data.items;

  const removeCategory = (id, token) => {
      deleteCategory(id,token);
      const newData = data.items.filter(c => c.id !== id);
      mutate('/api/categories', newData);
  }

  const addCategory = async (name, description) => {
    createCategory(name, description, token);
    const newItem = {
      id: 0,
      name: name,
      description: description
    };
    const _newItems = data.items.concat(newItem);
    const _newData = {
      page:0,
      items: _newItems
    };

    mutate('/api/categories', _newData);
  }

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
        render: (row) => <DeleteRow
          id={row.id}
          deleteFn={removeCategory}
          loggedIn={loggedIn}
          token={token}
        />
    }];

    return(
    <div className="categories-container">
        <div className="CategoriesTitle">
         <p>Categories</p>
        </div>

        <NewCategoryForm
          loggedIn={loggedIn}
          createFn={addCategory}
          token={token}
        />

        <div className="CategoriesTable">
          <Table
            dataSource={categories}
            columns={columns}
            pagination={false}
            locale={{emptyText:'No categories available.'}}
          />
        </div>
    </div>
    );

}

export default Categories;
