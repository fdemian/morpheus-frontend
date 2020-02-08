import Composer from './Composer';
import { connect } from 'react-redux';
import { createNewStory, requestEditStory, clearComposer } from './Actions';

//import loadCategories from '../Categories/Actions';

const mapStateToProps = (state) => {
  return {
  	id: state.composer.id,
	  title: state.composer.title,
    posted: state.composer.posted,
    posting: state.composer.posting,
    editing: state.composer.editing,
    story: state.composer.story,
    categories: state.categories.items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 return {
	  postStory: (story) => {
      dispatch(createNewStory(story));
    },
    editStory: (story) => {
       dispatch(requestEditStory(story));
    },
    clearComposer: () => {
      dispatch(clearComposer());
    }
 }
}

const ComposerContainer = connect(mapStateToProps, mapDispatchToProps)(Composer)

export default ComposerContainer;
