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

export default function* postNewStory(action){
    const state = yield select();
    const user = state.session.user.id;
    const token = state.session.token;
    const categoryId = (action.category === null ? null : action.category);
    const endpoint = "/api/stories";
    
    const jsonData = JSON.stringify({
       is_draft: action.isDraft,
       title: action.title,
       tags: action.tags,
       content: action.content,
       author: user,
       category: categoryId
    });

    try {
      const data = yield call(Fetch.POST, endpoint, [], jsonData, {token: token });
      yield put({type: SEND_STORY_OK, data: {'id': data.id} });
      yield put({type: NEW_STORY, story: data});
    }
    catch(error) {
      yield put({type: SEND_STORY_FAILURE, error: error});
    }
}

export function requestEditStory(story){

  const {
    id,
    title,
    category,
    tags,
    content,
    isDraft
  } = story;

  return {
    type: EDIT_STORY,
    id: id,
    title: title,
    category: category,
    tags: tags,
    content: content,
    isDraft: isDraft
  };
}

export function createNewStory(story){
  const {
    title,
    category,
    tags,
    content,
    isDraft
  } = story;

  return {
    type: SEND_STORY,
    title: title,
    category: category,
    tags: tags,
    content: content,
    isDraft: isDraft
  };
}

export function* editStory(action) {

  const { id, title, category, tags, content } = action;
  const state = yield select();
  const categoryId = (category === null ? null : category.id);
  const user = state.session.user.id;
  const token = state.session.token;
  const endpoint = "/api/stories/" + id;

  const jsonData = JSON.stringify({
     is_draft: action.isDraft,
     title: title,
     tags: tags,
     content: content,
     author: user,
     category: categoryId
  });

  try {
    const data = yield call(Fetch.PUT, endpoint, [], jsonData, {token: token });
    yield put({type: EDIT_STORY_OK, data: data});
  }
  catch(error) {
    yield put({type: EDIT_STORY_FAILURE, error: error});
  }
}

export function clearComposer() {
  return {
    type: CLEAR_COMPOSER
  };
}
