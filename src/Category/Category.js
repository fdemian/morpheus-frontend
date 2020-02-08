import React from 'react';
import Stories from '../Stories/Stories';
import Loading from '../Loading/LoadingIndicator';
import './Category.css';

const Category = ({category, isFetching, error, loggedIn, stories}) => {

  stories.forEach(s => s['category'] = category);

  if(isFetching || category === null)
    return <Loading />;

  return(
  <div className="category-container">

	   <div className="CategoryNameContainer">
        <p className="CategoryName">{category.name}</p>
        <p className="CategoryDescription">{category.description}</p>
	   </div>

     <div className="CategoryTopics">
        <Stories stories={stories} />
     </div>

  </div>
  );

}

export default Category;
