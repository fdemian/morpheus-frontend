import React from 'react';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import './Story.css';

const current_locale = 'es-AR';

const StoryTitle = ({title, category, author, date, isDraft}) => {

  const categoryLink = "/categories/" + category.id + "/" + category.name;

  const colors = [
    "success",
    "error",
    "default",
    "warning"
  ]

  // Format date.
  const _date = new Date(date);
  const dateOpts = {
    day: "numeric",
    month: "short",
    year: "numeric"
  };
  const formattedDate = new Intl.DateTimeFormat(current_locale, dateOpts).format(_date);
  const categoryColor = colors[category.id%colors.length]

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
        {formattedDate}
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
