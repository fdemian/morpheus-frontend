import React from 'react';
import Stories from '../Stories/Stories';
import Loading from '../Loading/LoadingIndicator';
import useSWR from 'swr';
import { useCategory, useCategoryStories } from './Actions';
import './Category.css';

const Category = (props) => {

  const { params } = props.match;
  const { category, error } = useCategory(params.id);
  const { stories } = useCategoryStories(category ? category.id : null);

  if((!category  && !error) || !stories)
    return <Loading />;

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
