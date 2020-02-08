import React from 'react';
import { Link } from 'react-router-dom';
import format_title_string from '../utils/formats';

const CategoryLink = ({category}) => {

  const { name, id } = category;
  const formattedName = format_title_string(name);
  const categoryLink = "/categories/" + id + "/" + formattedName;

  return(
  <Link to={categoryLink}>
    {category.name}
  </Link>
  );
}

export default CategoryLink;
