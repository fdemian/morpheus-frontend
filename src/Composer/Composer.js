import React from 'react';
import MediaQuery from 'react-responsive';
import GridContent from '../PageHeaderWrapper/GridContent';
import Composer from './ComposerComponent';

import './Composer.css';

const ComposerWrapper = ({postStory, editStory, clearComposer, posting, posted, id, title, categories, story}) => {

	return(
	<div className="composer-container">
		<GridContent>
			<MediaQuery minDeviceWidth={1224}>
				<Composer
					mobile={false}
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
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1224}>
				<Composer
					mobile={true}
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
			</MediaQuery>
		</GridContent>
	</div>
	);
}

export default ComposerWrapper;
