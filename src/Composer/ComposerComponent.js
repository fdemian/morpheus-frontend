import React,
{
  Fragment,
  useState,
  useRef,
  useEffect
} from 'react';
import format_title_string from '../utils/formats.js';
import { Redirect } from 'react-router-dom';
import { Editor } from 'elementary-editor';
import TitleEditor from './TitleEditor';
import CategoriesDropdown from './CategoriesDropdown';
import EditableTagGroup from './EditableTagGroup';
import Loading from '../Loading/LoadingIndicator';
import ConfirmButtons from './ConfirmButtons';

import './Composer.css';

const Composer = (props) => {

  const {
    story,
    editing,
    posting,
    posted,
    id,
    editStory,
    postStory,
    clearComposer,
    categories,
    mobile
  } = props;

  const editorContainer = useRef(null);

  const _title = story !== null ? story.name : null;
  const _category = story !== null ? story.category : null;
  const _content = story !== null ? story.content : null;
  const _tags = story !== null ? story.tags : [];

  const [title, setTitle] = useState(_title);
  const [category, setCategory ] = useState(_category);
  const [content] = useState(_content);
  const [tags, setTags ] = useState(_tags);

  useEffect(() => {
    return function cleanup() {
      clearComposer();
    };
  }, [id, clearComposer]);

  const postStoryContent = (isDraft) => {

    const editor = editorContainer.current;
    const content = editor.getContent();

    const storyObjId = editing ? story.id : -1;
    const storyObj = {
      id: storyObjId,
      title: title,
      category: category,
      tags: tags,
      content: content,
      isDraft: isDraft
    };

    if(editing) {
      editStory(storyObj);
    }
    else {
      postStory(storyObj);
    }
  }

  const updateCategoryFn = (value) => {
    setCategory(value);
  }

  const updateTitleFn = (evt) => {
    setTitle(evt.target.value);
  }

  const updateTags = (tags) => setTags(tags);

  if(posting)
    return <Loading />;

  if(posted && !posting){
    clearComposer();
    const formattedTitle = format_title_string(title);
    const redirectURL = "/stories/" + id + "/" + formattedTitle;
    return <Redirect to={redirectURL} />;
  }

  const mobileClass = mobile ? "Mobile" : "Desktop";
  const isDraft = (!editing || story.isDraft === true);
  const postStoryAdDraft = () => postStoryContent(true);
  const postContentFn = () => postStoryContent(false);

  return(
  <div>

    <div className="ComposerTitle">
      <p className="ComposerTitleText">Create new story</p>
    </div>

    <div className={"ComposerHeadContainer " + mobileClass}>
      <TitleEditor
          updateTitleFn={updateTitleFn}
          initialState={title}
      />
      <span className="CategoriesContainer">
       <CategoriesDropdown
          updateCategoryFn={updateCategoryFn}
          categories={categories}
          initialState={category}
        />
      </span>
    </div>

    <div className="PostEditorContainer">
     <Editor
        initialState={content}
        containerRef={editorContainer}
     />
    </div>

    <div className="TagsContainer">
      <Fragment>
        <p className="TagChooseText">
          Choose some tags
        </p>
      </Fragment>
      <EditableTagGroup
        initialState={tags}
        updateFn={updateTags}
      />
    </div>

    <div>
     <ConfirmButtons
        isDraft={isDraft}
        editing={editing}
        postStoryContent={postContentFn}
        postAsDraftFn={postStoryAdDraft}
     />
  </div>

 </div>
 );
}

export default Composer;
