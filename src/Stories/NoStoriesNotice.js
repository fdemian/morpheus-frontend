import React from 'react';

const NoStoriesNotice = ({text, error}) => (
  <div className="stories-container">
    <h1 className={"NoStories" + error ? " ErrorText" : ""}>
      {text}
    </h1>
  </div>
);

export default NoStoriesNotice;
