import React from 'react';
import { DefaultRenderer }  from 'elementary-editor';

const StoryText = ({content}) => {

  const rawText = JSON.parse(content);

  return(
  <div className="StoryText">
	 <DefaultRenderer raw={rawText} />
  </div>
  );
}

export default StoryText;
