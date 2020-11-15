import React from 'react';
import { Button, Input } from 'antd';
// Font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck as check,
  faTimes as close
} from '@fortawesome/free-solid-svg-icons';
import './Categories.css';

const Form = ({ updateName, updateDescription , createFn, cancelFn, visible }) => {

    if(!visible)
      return null;

    return(
    <div className="NewCategoryForm">

      <div className="FormGroup">
        <span>
          Name &nbsp;
          <Input
             data-testid="input-category-name"
             placeholder="A name for the new category"
             onChange={(e) => updateName(e.target.value)}
             className="FormInput FromInputLeft"
           />
           </span>
        </div>

        <div className="FormGroup">
          <span>
            Description &nbsp;
            <Input
              data-testid="input-category-description"
              placeholder="What can be found inside this category"
              onChange={(e) => updateDescription(e.target.value)}
              className="FormInput"
            />
          </span>
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

export default Form;
