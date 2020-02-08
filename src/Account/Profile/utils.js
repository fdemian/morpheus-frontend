import { message } from 'antd';

export const afterUpload = (imageUrl, setStateFn) => {
   setStateFn(imageUrl);
}

export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const beforeUpload = (file, postFile) => {

  const isJPG = file.type === 'image/jpeg';
  const isPNG = file.type === 'image/png';
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isJPG && !isPNG) {
    message.error('You can only upload JPG or PNG files.');
	  return false;
  }

  if (!isLt2M) {
    message.error('The image must smaller than 2MB.');
	  return false;
  }

  const formData = new FormData();
  formData.append('avatar', file);

  postFile(formData);

  //
  return false;
}

export const handleChange = (info, setImageUrl) => {
  const { file } = info;
  const { status, originFileObj } = file;

  if (status === 'done') {
    // Get this url from response in real world.
    getBase64(originFileObj, imageUrl => afterUpload(imageUrl, setImageUrl));
  }
}
