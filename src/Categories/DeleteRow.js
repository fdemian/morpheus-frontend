import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash as trash} from '@fortawesome/free-solid-svg-icons';

const DeleteRow = ({id, loggedIn, deleteFn}) => {
    if(!loggedIn)
      return null;

    return(
    <FontAwesomeIcon
       icon={trash}
       size="lg"
       onClick={() => deleteFn(id)}
     />
    );
}

export default DeleteRow;
