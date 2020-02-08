import React from 'react';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import './Story.css';
import moment from 'moment';

const StoryTitle = ({title, category, author, date, isDraft}) => {

  const categoryLink = "/categories/" + category.id + "/" + category.name;

  const colors = [
    "success",
    "error",
    "default",
    "warning"
  ]

  const categoryColor = colors[category.id%colors.length]
  const formattedDate = moment(date).format("Do MMM YYYY");

  return(
  <div>

		<div>
	  	<p className="StoryTitleHeading">
			{title}
	  	</p>
		</div>

    {
     isDraft ?
     (
      <div className="TopicDate">
        Draft
      </div>
      )
      :
	 	 (
      <div className="TopicDate">
       Posted <span>{formattedDate}</span>
	 	  </div>
      )
    }

    <div className="TopicInfoContainer">
	   	<Link to={categoryLink} className="TopicCategoryLink">
        <Badge status={categoryColor} />
        {category.name}
			</Link>
    </div>

  </div>
  );
}

export default StoryTitle;
