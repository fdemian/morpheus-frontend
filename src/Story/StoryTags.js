import React from 'react';
import { Tag } from 'antd';

const StoryTags = ({tags}) => {

  const mappedTags = tags.filter(t => t !== "");

  return(
  <div>
   {mappedTags.map((tag, i) =>
	  <Tag color="#108ee9" key={i}>
      {tag}
	  </Tag>
   )}
  </div>
  );

}

export default StoryTags;
