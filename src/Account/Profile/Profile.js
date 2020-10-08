import React, {
  useState,
  lazy,
  Suspense
} from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { postFile, updateUser } from './Actions';
import { getBase64 } from './utils';

import './Profile.css';

const AvatarModify = lazy(() => import('./AvatarModify'));
const FormItem = Form.Item;

//Form.create()
const Profile = ({ user, mutate, isLoading }) => {

  //TODDO: Fullname and about should be added to the model.
  let _fullname = "";
  let _about = "";
  if(user) {
    _fullname = user.name === undefined ? "" : user.name;
    _about = user.about === undefined ? "" : user.about;
  }

  // Setup hooks.
  const [id] = useState(user ? user.id : null);
  const [email] = useState(user ? user.email: null);
  const [username, setUsername ] = useState(user ? user.username : null);
  const [fullname, setFullname] = useState(_fullname);
  const [ about, setAbout ] = useState(_about);
  const [ signature, setSignature ] = useState(user ? user.signature : null);

  // Onchange functions (set state)
  const onUsernameChange = (evt) => setUsername(evt.target.value);
  const onNameChange = (evt) => setFullname(evt.target.value);
  const onAboutChange = (evt) => setAbout(evt.target.value);
  const onSignatureChange = (evt) => setSignature(evt.target.value);

  const updateUserInfo = () => {
    let userInfo = {
      id: id,
      email: email,
      username: username,
      fullname: fullname,
      about: about,
      signature: signature
    };
    updateUser(userInfo);
    userInfo.avatar = user.avatar;
    userInfo.name = fullname;
    mutate({user: userInfo});
  }

  const isMobile = useMediaQuery({query: '(max-device-width: 1224px)'});

  return(
  <div className='baseView'>
    <div className='left'>
      {
        isMobile ?
        <Suspense fallback={<Spin />}>
          <AvatarModify
            user={user}
            postFile={postFile}
            isFetching={isLoading}
          />
          <br />
        </Suspense>
        : null
      }
      <Form layout="vertical" hideRequiredMark>
        <FormItem label="Username">
            <Input
              placeholder="Username"
              value={username}
              onChange={onUsernameChange}
              disabled={isLoading}
            />
        </FormItem>
        <FormItem label="Full name">
            <Input
              placeholder="Full name"
              value={fullname}
              onChange={onNameChange}
              disabled={isLoading}
            />
        </FormItem>
        <FormItem label="Signature">
           <Input.TextArea
             placeholder="Signature"
             value={signature}
             rows={4}
             onChange={onSignatureChange}
             disabled={isLoading}
           />
        </FormItem>
        <FormItem label="About me">
           <Input.TextArea
              placeholder="About me..."
              value={about}
              rows={4}
              onChange={onAboutChange}
              disabled={isLoading}
            />
        </FormItem>
        <Button
          type="primary"
          onClick={updateUserInfo}
          loading={isLoading}
        >
          Update Information
        </Button>
      </Form>
    </div>
    {isMobile ? null :
      <Suspense fallback={<Spin />}>
        <div className='right'>
          <AvatarModify
            user={user}
            postFile={async (formData, username, image) => {
              postFile(formData, username);
              const _user = JSON.parse(JSON.stringify(user));
              const b64 = await getBase64(image, (e)=> {
                console.clear();
                console.log(_user);
                _user.avatar = e
                mutate(_user);
              });
             }
           }
            isFetching={isLoading}
          />
          <br />
        </div>
      </Suspense>
    }
  </div>
  );

}

export default Profile;
