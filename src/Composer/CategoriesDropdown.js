import React from 'react';
import { Select, Badge } from 'antd';
const Option = Select.Option;

function handleChange(value, updateCategoryFn) {
   updateCategoryFn(value);
}

function filterInput(input, option)
{
  return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
}

const colors = [
  "success",
  "error",
  "default",
  "warning"
]

const CategoriesDropdown = ({updateCategoryFn, categories, initialState}) => {

  const defaultValue = initialState === null ? -1 : initialState.id;

  return(
  <span>
     <Select
	      showSearch
		    style={{ width: '100%' }}
        disabled={categories.length === 0}
        placeholder={categories.length === 0 ? "No categories available" : "Select a category"}
        optionFilterProp="children"
        onChange={(value) => handleChange(value, updateCategoryFn)}
        filterOption={(input, option) => filterInput(input, option)}
        defaultValue={defaultValue}
     >
       <Option value={-1} key={-1}>Uncategorized</Option>
	     {categories.map((category, i) =>
		     <Option value={category.id} key={i} >
            <Badge status={colors[i%colors.length]} />
		        {category.name}
		     </Option>
	     )}
     </Select>
  </span>
  );
}

export default CategoriesDropdown;
