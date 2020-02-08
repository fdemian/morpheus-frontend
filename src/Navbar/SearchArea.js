import React from 'react';
import { Input } from 'antd';

const inputStyle = { width: '300px', fontSize:'15px' };

const SearchArea = () => (
  <div>
    <Input placeholder="Search this blog" style={inputStyle} />
  </div>
)

export default SearchArea;
