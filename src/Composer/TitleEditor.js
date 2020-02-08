import React from 'react';
import { Input } from 'antd';

const TitleEditor = ({updateTitleFn, initialState}) => {

  let value = initialState === null ? "" : initialState;

  return(
  <span className="TitleInputContainer">
	 <Input
      placeholder="Enter topic title here"
      className="TitleInput"
      defaultValue={value}
      onChange={(value) => updateTitleFn(value)}
    />
  </span>
  );
}

export default TitleEditor;
