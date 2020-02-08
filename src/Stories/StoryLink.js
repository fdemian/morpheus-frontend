import React from 'react';
import { Link } from 'react-router-dom';
import './Stories.css';
import format_title_string from '../utils/formats';

const StoryLink = ({story}) => {

  const storyLink = '/stories/' + story.id + '/' + format_title_string(story.name);

  return(
  <Link to={storyLink}>
    <h1 className="StoryLinkTitle">{story.name}</h1>
  </Link>
  );
}

export default StoryLink;
