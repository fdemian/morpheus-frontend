import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Composer from './ComposerComponent';

import './Composer.css';

const ComposerWrapper = ({postStory, editStory, clearComposer, posting, posted, id, title, categories, story}) => {

	const isMobile = useMediaQuery({query: '(max-device-width: 1224px)'});

	return(
	<div className="composer-container">
			<Composer
				mobile={isMobile}
				postStory={postStory}
				editStory={editStory}
				posting={posting}
				posted={posted}
				id={id}
				categories={categories}
				clearComposer={clearComposer}
				story={story}
				editing={story !== null}
			/>
	</div>
	);
}

export default ComposerWrapper;
