import React from 'react';
import Button from 'antd/lib/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash as trash} from '@fortawesome/free-solid-svg-icons';

const DeleteRow = ({id, token, loggedIn, deleteFn}) => {
    if(!loggedIn)
      return null;

    return(
    <Button
      type="primary"
      shape="circle"
      icon={
      <FontAwesomeIcon
         icon={trash}
         size="lg"
       />
      }
      onClick={() => deleteFn(id, token)}
    />
    );
}

export default DeleteRow;
