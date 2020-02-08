import Fetch from '../store/Fetch';
import { select, put, call } from 'redux-saga/effects';

export const REQUEST_STORY_EDIT = 'REQUEST_STORY_EDIT';

export const GET_STORIES = 'GET_STORIES';
export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORIES_FAILURE = 'RECEIVE_STORIES_FAILURE';

export const DELETE_STORY = 'DELETE_STORY';
export const DELETE_STORY_OK = 'DELETE_STORY_OK';
export const DELETE_STORY_FAILURE = 'DELETE_STORY_FAILURE';

export const EDIT_STORY = "EDIT_STORY";
export const EDIT_STORY_OK = "EDIT_STORY_OK";

export function requestStories(){
  return {
    type: GET_STORIES
  };
}

export function requestDeleteStory(id){
  return {
    type: DELETE_STORY,
    id: id
  };
}

export default function* loadStories(){
  try {
    const stories = yield call(Fetch.GET, '/api/stories');
    yield put({type: RECEIVE_STORIES, data: stories});
  }
  catch(error) {
    yield put({type: RECEIVE_STORIES_FAILURE, error: error})
  }
}

export function* deleteStory(action){

   const state = yield select();
   const token = state.session.token;
   const options = { token: token };
   try {
    const data = yield call(Fetch.DELETE,'/api/stories/' + action.id, [], null, options);
    yield put({type: DELETE_STORY_OK, data: data});
  }
  catch(error){
    yield put({type: DELETE_STORY_FAILURE});
  }
}

export function requestEditStory(id, stories){

  const storyToEdit = stories.filter(s => s.id === id)[0];

  return {
    type: REQUEST_STORY_EDIT,
    id: id,
    story: storyToEdit
  };
}

export function* editStory(action){
   const state = yield select();
   const stories = state.stories.stories;
   const storyToEdit = stories.filter(s => s.id === action.id)[0];
   yield put({type: EDIT_STORY_OK, data: storyToEdit});
}
