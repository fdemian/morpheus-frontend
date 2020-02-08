import React from 'react';
import './GridContent.css';

const GridContent = ({children}) => {
  return (
  <div className="mainGrid wide">
    {children}
  </div>
  );
}

export default GridContent;
