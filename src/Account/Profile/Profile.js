import React, {
  useState,
  lazy,
  Suspense
} from 'react';
import { Form, Input, Button, Spin } from 'antd';
import AvatarUpload from './AvatarUpload';
import AccountAvatar from '../../UserAvatar/UserAvatar';
import MediaQuery from 'react-responsive';

import './Profile.css';

const FormItem = Form.Item;

//Form.create()
const BaseView = (props) => {

  const {
    user,
    isFetching,
    postFile
  } = props;
  const avatarLink = '/static/avatars/' + user.avatar;

  const _fullname = user.name === undefined ? "" : user.name;
  const _about = user.about === undefined ? "" : user.about;

  const [id] = useState(user.id);
  const [email] = useState(user.email);
  const [username, setUsername ] = useState(user.username);
  const [fullname, setFullname] = useState(_fullname);
  const [ about, setAbout ] = useState(_about);
  const [ signature, setSignature ] = useState(user.signature);

  const onUsernameChange = (evt) => {
    setUsername(evt.target.value)
  }

  const onNameChange = (evt) => {
    setFullname(evt.target.value);
  }

  const onAboutChange = (evt) => {
    setAbout(evt.target.value);
  }

  const onSignatureChange = (evt) => {
    setSignature(evt.target.value);
  }

  const updateUserInfo = () => {
    const userInfo = {
      id: id,
      email: email,
      username: username,
      fullname: fullname,
      about: about,
      signature: signature
    }

    props.updateUser(userInfo);
  }

  return(
  <div className='baseView'>
    <div className='left'>
      <MediaQuery maxDeviceWidth={1224}>
        <AccountAvatar
          avatar={user.avatar}
          username={user.username}
          size={150}
          shape="square"
        />
        <AvatarUpload
            imageUrl={avatarLink}
            postFile={postFile}
            uploading={isFetching}
        />
        <br />
      </MediaQuery>
      <Form layout="vertical" hideRequiredMark>
        <FormItem label="Username">
            <Input
              placeholder="Username"
              value={username}
              onChange={onUsernameChange}
              disabled={isFetching}
            />
        </FormItem>
        <FormItem label="Full name">
            <Input
              placeholder="Full name"
              value={fullname}
              onChange={onNameChange}
              disabled={isFetching}
            />
        </FormItem>
        <FormItem label="Signature">
           <Input.TextArea
             placeholder="Signature"
             value={signature}
             rows={4}
             onChange={onSignatureChange}
             disabled={isFetching}
           />
        </FormItem>
        <FormItem label="About me">
           <Input.TextArea
              placeholder="About me..."
              value={about}
              rows={4}
              onChange={onAboutChange}
              disabled={isFetching}
            />
        </FormItem>
        <Button
          type="primary"
          onClick={updateUserInfo}
          loading={isFetching}
        >
          Update Information
        </Button>
      </Form>
    </div>

    <MediaQuery minDeviceWidth={1224} >
      <div className='right'>
        <AccountAvatar
          avatar={user.avatar}
          username={user.username}
          size={150}
          shape="square"
        />
        <AvatarUpload
            imageUrl={avatarLink}
            postFile={postFile}
            uploading={isFetching}
        />
      </div>
    </MediaQuery>

  </div>
  );

}

export default BaseView;
