import React from 'react';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionButton = (props) =>
{

   const {
    title,
    linkURL,
    icon,
    clickFn,
    id,
    cssClass
   } = props;

   return(
   <Tooltip
      title={title}
      placement="bottom"
      className='ActionTooltip'
   >
      <Link to={linkURL}>
        <FontAwesomeIcon
		       icon={icon}
		       size="lg"
		       onClick={() => clickFn(id)}
		       className={cssClass}
	      />
      </Link>
   </Tooltip>
   );
}

export default ActionButton;
