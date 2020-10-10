import React, { useState } from 'react';
import ModifyPasswordModal from './ModifyPassword/ModifyPasswordModal';
import ModifyEmailModal from './ModifyEmailModal';
import {
  List,
  Button,
  Modal,
  Switch,
  Radio
} from 'antd';

import useSWR from 'swr';
import { updateUser, updatePassword } from '../Profile/Actions';
import getOptionsValues from '../../utils/misc';

const RadioGroup = Radio.Group;

const radioStyle = {
   display: 'block',
   height: '30px',
   lineHeight: '30px',
};

const commentOptionsArray = [
  {id: 1, text: 'OFF'},
  {id: 2, text: 'ANONYMOUS'},
  {id: 3, text: 'AUTHENTICATED'}
];

const getCommentOptions = (config) => getOptionsValues(config.options, 'comments');

const SecurityView = (props) => {

  const {
    user,
    mutate,
    isLoading
  }  = props;

  const isFetchingConfig = false;
  const { data:config, error } = useSWR('/api/options');

  const commentsEnabled = config ? getCommentOptions(config): null;
  const [ paswordModalOpen, setPaswordModalOpen ] = useState(false);
  const [ emailModalOpen, setEmailModalOpen ] = useState(false);
  const [ isFetching , setIsFetching ] = useState(false);

  const filterOpts = commentOptionsArray.filter(c => c.text === commentsEnabled);
  const defaultCommentOpt = commentsEnabled ? filterOpts[0].id : null;
  const [ commentOptions, setCommentOptions ] = useState(defaultCommentOpt);

  // Toggle fns. (remove?)
  const toggleModifyPasswordModal = () => setPaswordModalOpen(!paswordModalOpen);
  const toggleEmailModal = () => setEmailModalOpen(!emailModalOpen);

  const modifyPassword = async (currentPass, newPass) => {
    await updatePassword(currentPass, newPass, user.id);
    setPaswordModalOpen(!paswordModalOpen);
  }

  const updateEmail = async (email) => {
    const newUser = JSON.parse(JSON.stringify(user));
    newUser.email = email;
    newUser.fullname = newUser.name;
    newUser.about = "";
    newUser.signature = "";

    setIsFetching(true);
    mutate({user: newUser});
    await updateUser(newUser);
    setIsFetching(false);
    setEmailModalOpen(!emailModalOpen);
  }

  const setCommentRadio = (e) => {
    setCommentOptions(e.target.value);
  }

  const updateSecurityInfo = () => {
    const selected = commentOptionsArray[commentOptions-1];
    const securityInfo = {
      key: 'comments',
      value: selected.text
    };

    props.updateSecInfo(securityInfo);
  }

  if((!config && !error) || isLoading)
    return <p>Loading...</p>;

  const viewItems = [
    {
      title: 'Password',
      description: (
      <>
        Current password:
        ******
      </>
      ),
      actions: [
       <button
          className={"link-button" + (isFetchingConfig ? " blocked" : "")}
          onClick={toggleModifyPasswordModal}
          disabled={isFetchingConfig}
       >
          Modify
       </button>
      ],
     },
     {
      title: 'Current Email',
      description: `mail：${user.email}`,
      actions: [
        <button
          className={"link-button" + (isFetchingConfig ? " blocked" : "")}
          onClick={toggleEmailModal}
          disabled={isFetchingConfig}
        >
            Modify
        </button>
        ],
      },
      {
        title: 'Moderate comments',
        description: "Comments remain invisible until approved.",
        actions: [
        <Switch
          disabled
          checkedChildren="On"
          unCheckedChildren="Off"
        />
        ],
      },
      {
        title: 'Allow comments',
        description:
        (
          <RadioGroup name="radiogroup" defaultValue={defaultCommentOpt}>
          <Radio style={radioStyle} value={1} onClick={setCommentRadio} disabled={isFetchingConfig}>
            Off
          </Radio>
          <em>No one can comment on stories</em>
          <Radio style={radioStyle} value={2} onClick={setCommentRadio}  disabled={isFetchingConfig}>
            Anonymous
          </Radio>
          <em>Both registered users and anonymous users can comment on stories.</em>
          <Radio style={radioStyle} value={3} onClick={setCommentRadio} disabled={isFetchingConfig}>
            Require registration
          </Radio>
          <em>Only registered users or contributors can comment on stories. </em>
        </RadioGroup>
      ),
        actions: [],
      }
    ];

    const buttonText = isFetchingConfig ? "Updating information" : "Update information";

    return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={viewItems}
        renderItem={item => (
          <List.Item actions={item.actions}>
            <List.Item.Meta
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
      <Modal
        title="Modify password"
        visible={paswordModalOpen}
        width={600}
        footer={
        <Button
            type="button"
            onClick={toggleModifyPasswordModal}
          >
           Close
        </Button>
        }
      >
        <ModifyPasswordModal
          modifyPassword={modifyPassword}
          isFetching={false}
          error={error}
        />
      </Modal>
      <Modal
        title="Modify email"
        visible={emailModalOpen}
        footer={
         <Button
           type="button"
           onClick={toggleEmailModal}
         >
          Close
        </Button>
        }
      >
        <ModifyEmailModal
          user={user}
          updateEmail={updateEmail}
          isFetching={isFetching}
          error={error}
        />
      </Modal>
      <br />
      <hr />
      <Button
        type="primary"
        onClick={updateSecurityInfo}
        loading={isFetchingConfig}
      >
        {buttonText}
      </Button>
    </>
    );
}

export default SecurityView;
