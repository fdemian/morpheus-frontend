import React from 'react';
import Stories from '../Stories/Stories';
import Loading from '../Loading/LoadingIndicator';
import useSWR from 'swr';
import './Category.css';

const Category = (props) => {

  const { params } = props.match;
  const { data: category, error } = useSWR(`/api/categories/${params.id}`);
  const { data: stories } =  useSWR( category ? `/api/categories/${category.id}/1` : null);

  if((!category  && !error) || !stories)
    return <Loading />;

  //stories.forEach(s => s['category'] = category);
  const _stories = stories.items;

  return(
  <div className="category-container">

	   <div className="CategoryNameContainer">
        <p className="CategoryName">{category.name}</p>
        <p className="CategoryDescription">{category.description}</p>
	   </div>

     <div className="CategoryTopics">
        <Stories stories={_stories} />
     </div>

  </div>
  );

}

export default Category;
