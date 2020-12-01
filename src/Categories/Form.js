import React from 'react';
import { Button, Input, Form } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck as check,
  faTimes as close
} from '@fortawesome/free-solid-svg-icons';
import './Categories.css';

const NewCategoryForm = ({ updateName, updateDescription , createFn, cancelFn, visible }) => {

    if(!visible)
      return null;

    return(
    <div className="NewCategoryForm">

      <div className="FormGroup">

      <Form name="newcategory" role="form">

          <Form.Item
            name="name"
            label="Name"
            rules={[
             {
                required: true,
                message: 'Please, input a name for this category.',
             }]}
          >
            <Input
               role="input"
               name="name"
               type="text"
               data-testid="input-category-name"
               placeholder="A name for the new category"
               onChange={(e) => updateName(e.target.value)}
               className="FormInput FromInputLeft"
             />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
             {
                required: true,
                message: 'Please, input a description for this category.',
             }]}
          >
            <Input
              role="input"
              name="description"
              type="text"
              data-testid="input-category-description"
              placeholder="What can be found inside this category?"
              onChange={(e) => updateDescription(e.target.value)}
              className="FormInput"
            />
          </Form.Item>

        </Form>

        </div>

        <div className="FormButtons">
          <Button
            onClick={() => cancelFn()}
            className="FormButtonRight"
          >
            <FontAwesomeIcon icon={close} size="lg" />
            &nbsp; Cancel
          </Button>

          <Button
            onClick={() => createFn()}
            className="FormButtonLeft"
          >
            <FontAwesomeIcon icon={check} size="lg" />
            &nbsp; Create
          </Button>
        </div>

      </div>
    );
}

export default NewCategoryForm;
