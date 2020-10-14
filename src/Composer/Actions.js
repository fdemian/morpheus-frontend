import Fetch from '../store/Fetch';
import { select, put, call } from 'redux-saga/effects';

export const SEND_STORY = 'SEND_STORY';
export const SEND_STORY_OK = 'SEND_STORY_OK';
export const SEND_STORY_FAILURE = 'SEND_STORY_FAILURE';

export const REQUEST_STORY_EDIT = 'REQUEST_STORY_EDIT';

export const EDIT_STORY = 'EDIT_STORY';
export const EDIT_STORY_OK = 'EDIT_STORY_OK';
export const EDIT_STORY_FAILURE = 'EDIT_STORY_FAILURE';

export const CLEAR_COMPOSER = 'CLEAR_COMPOSER';

export const NEW_STORY = 'NEW_STORY';


export const postStory = async (props) => {

    const {
      isDraft,
      title,
      tags,
      content,
      category,
      userId
    } = props;

    const categoryId = (category === null ? null : category.id);
    const jsonData = JSON.stringify({
       is_draft: isDraft,
       title: title,
       tags: tags,
       content: content,
       author: userId,
       category: categoryId
    });

    console.log(jsonData);

    try {
      const data = await Fetch.POST('/api/stories', [], jsonData, {});
      return data;
    }
    catch(error) {
      console.log(error);
    }
}

export const editStory = async (props) => {

  const {
    id,
    isDraft,
    title,
    tags,
    content,
    category,
    userId
  } = props;

  const categoryId = (category === null ? null : category.id);
  const jsonData = JSON.stringify({
     is_draft: isDraft,
     title: title,
     tags: tags,
     content: content,
     author: userId,
     category: categoryId
  });

  try {
    const data = await Fetch.PUT(`/api/stories/${id}`, [], jsonData, {});
    return data;
  }
  catch(error) {
    console.log("Error");
  }
}
