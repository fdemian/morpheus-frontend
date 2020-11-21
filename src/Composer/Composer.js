import React, { useState, useRef } from 'react';
import format_title_string from '../utils/formats.js';
import { useMediaQuery } from 'react-responsive';
import { Redirect } from 'react-router-dom';
import { Editor } from 'elementary-editor';
import TitleEditor from './TitleEditor';
import CategoriesDropdown from './CategoriesDropdown';
import EditableTagGroup from './EditableTagGroup';
import Loading from '../Loading/LoadingIndicator';
import ConfirmButtons from './ConfirmButtons';
import { useCategories } from '../Categories/Actions';
import { useUser } from '../Login/Actions';
import { getLoginData } from '../Login/utils';
import { postStory, editStory } from './Actions';
import './Composer.css';

const Composer = (props) => {

  // Initial values.
  const userId = getLoginData();
  const { categories } = useCategories();
  const { user } = useUser(userId);
  const { isEditing, story } = props;

	const mobile = useMediaQuery({query: '(max-device-width: 1224px)'});
  const editorContainer = useRef(null);

  //
  const _title = isEditing ? story.title : null;
  const _category = isEditing ? story.category : null;
  const _content = isEditing ? story.content : null;
  const _tags = isEditing ? story.tags : [];
  const _id = isEditing ? story.id : null;

  const [id, setId] = useState(_id); // TODO: change for editing.
  const [title, setTitle] = useState(_title);
  const [category, setCategory ] = useState(_category);
  const [content] = useState(_content);
  const [tags, setTags ] = useState(_tags);

  //
  const [posted, setPosted] = useState(false);
  const [posting] = useState(false);
  const [editing, setEditing] = useState(false);

  const postStoryContent = async (isDraft) => {

    const editor = editorContainer.current;
    const content = editor.getContent();

    const storyObjId = isEditing ? story.id : -1;
    const storyObj = {
      id: storyObjId,
      title: title,
      category: category,
      tags: tags,
      content: content,
      isDraft: isDraft,
      userId: user.user.id
    };

    const storyFn = isEditing ? editStory : postStory;
    //
    setEditing(true);
    const _postedStory = await storyFn(storyObj);

    if(!isEditing) {
      console.log(_postedStory);
      setId(_postedStory.id);
    }

    setEditing(false);
    setPosted(true);
  }

  //
  const updateCategoryFn = (value) => setCategory(value);
  const updateTitleFn = (evt) => setTitle(evt.target.value);
  const updateTags = (tags) => setTags(tags);

  if((!user || posting) || (isEditing && !story))
    return <Loading />;

  if(posted && !posting){
    const formattedTitle = format_title_string(title);
    const redirectURL = "/stories/" + id + "/" + formattedTitle;
    return <Redirect to={redirectURL} />;
  }

  const mobileClass = mobile ? "Mobile" : "Desktop";
  const isDraft = isEditing && (!editing || story.isDraft === true);
  const postStoryAdDraft = () => postStoryContent(true);
  const postContentFn = () => postStoryContent(false);

  return(
  <div className="composer-container">

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
        <p className="TagChooseText">
          Choose some tags
        </p>
      <EditableTagGroup
        initialState={tags}
        updateFn={updateTags}
      />
    </div>

    <div>
     <ConfirmButtons
        isDraft={isDraft}
        editing={isEditing}
        postStoryContent={postContentFn}
        postAsDraftFn={postStoryAdDraft}
     />
  </div>

 </div>
 );
}

export default Composer;
