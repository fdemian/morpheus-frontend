import React, { useState, useRef } from 'react';
import { Tag, Input, Tooltip, Button } from 'antd';
import './Composer.css';

const initialTags = initialState => initialState === null ? [] : initialState;

const EditableTagGroup = (props) => {

  const { initialState } = props;
  const [tags, setTags] = useState(initialTags(initialState));
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const input = useRef(null);

  const handleClose = (removedTag) => {
    const newTags = tags.filter(tag => tag !== removedTag);
    setTags(newTags);
    props.updateFn(tags);
  }

  const showInput = () => {
    setInputVisible(true);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputConfirm = () => {

    let newTags;



    if (inputValue.trim() !== ""
        && inputValue
        && tags.indexOf(inputValue) === -1) {
      newTags = [...tags, inputValue];
      setTags(newTags);
      setInputValue('');
    }

    setInputVisible(false);
    props.updateFn(newTags);
  }

  return(
  <div className="TagContainer">
    {tags.map((tag, index) => {
      const isLongTag = tag.length > 20;
      const tagElem = (
      <Tag
          className="ant-tag"
          key={tag}
          closable={true}
          onClose={() => handleClose(tag)}
      >
        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
      </Tag>
      );

      return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
    })}
    {inputVisible && (
      <Input
        ref={input}
        type="text"
        size="large"
        style={{ width: 78 }}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
       />
     )}
     {!inputVisible &&
       <Button
          size="large"
          type="dashed"
          onClick={showInput}
          style={{fontWeight:'600'}}
        >
        + New Tag
       </Button>
     }
   </div>
   );
}

export default EditableTagGroup;
