import React from 'react';
import { Table } from 'antd';
import {
  createCategory,
  deleteCategory,
  useCategories
 } from './Api';
import DeleteRow from './DeleteRow';
import CategoryLink from './CategoryLink';
import NewCategoryForm from './NewCategoryForm';
import { mutate } from 'swr';
import { isLoggedIn } from '../Login/utils';

import './Categories.css';

const Categories = (props) => {

  const loggedIn = isLoggedIn();
  const { categories } = useCategories();
  
  const removeCategory = (id, token) => {
      deleteCategory(id);
      const newData = categories.filter(c => c.id !== id);
      mutate('/api/categories', newData);
  }

  const addCategory = async (name, description) => {
    createCategory(name, description);
    const newItem = {
      id: 0,
      name: name,
      description: description
    };
    const _newItems = categories.concat(newItem);
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
