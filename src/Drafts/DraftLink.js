import React from 'react';
import { Link } from 'react-router-dom';
import format_title_string from '../utils/formats';

const DraftLink = ({draft}) => {

  const { name, id } = draft;
  const formattedName = format_title_string(name);
  const draftLink = "/draft/" + id + "/" + formattedName;

  return(
  <Link to={draftLink}>
    {name}
  </Link>
  );
}

export default DraftLink;
