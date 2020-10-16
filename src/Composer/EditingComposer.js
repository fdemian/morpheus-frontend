import React from 'react';
import Composer from './ComposerComponent';
import Loading from '../Loading/LoadingIndicator';
import { useStory } from '../Story/Actions';

const EditingComposer = (props) => {
  const { params } = props.match
  const { story, error } = useStory(params.id);

  if(!error && !story)
    return <Loading />;

  return <Composer isEditing={true} story={story} />;
}

export default EditingComposer;
