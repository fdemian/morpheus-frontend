import React, { useState } from 'react';
import { Button } from 'antd';

// Font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as plus } from '@fortawesome/free-solid-svg-icons';
import './Categories.css';
import Form from './Form';

const NewCategoryForm = (props) => {

  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const toggleForm = () => {
    setFormVisible(!formVisible);
  }

  const updateName = (name) => {
    setName(name);
  }

  const updateDescription = (description) => {
    setDescription(description);
  }

  const createCategory = () => {
    props.createFn(name, description, props.token);
    setFormVisible(false);
  }

  if(!props.loggedIn)
    return null;

  return(
  <div>

      <div className="NewCategory">
        <Button onClick={toggleForm}>
           <FontAwesomeIcon icon={plus} size="lg" />
            &nbsp; New category
        </Button>
      </div>

      <Form
        visible={formVisible}
        createFn={createCategory}
        cancelFn={toggleForm}
        updateName={updateName}
        updateDescription={updateDescription}
      />

  </div>
  );

}

export default NewCategoryForm;
