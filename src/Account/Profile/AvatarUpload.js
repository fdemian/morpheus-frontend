import React, { useState } from 'react';
import { Upload } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  beforeUpload,
  handleChange
} from './utils.js';
import './Profile.css';

const uploadURL = "/api/uploads";

const AvatarUpload = (props) => {

  const [imageUrl, setImageUrl] = useState(null);
  const { postFile } = props;

  return (
  <Upload
    className="avatar-uploader"
    name="avatar"
    showUploadList={false}
    action={uploadURL}
    beforeUpload={(file) => beforeUpload(file, postFile)}
    onChange={(info) => handleChange(info, setImageUrl)}
  >
    { imageUrl ?
     <img src={imageUrl} alt="" className="avatar" /> :
     <FontAwesomeIcon
        icon={faPlus}
        className="avatar-uploader-trigger"
     />
    }
  </Upload>
  );

}

export default AvatarUpload;
