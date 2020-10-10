import Fetch from '../store/Fetch';
import { select, put } from 'redux-saga/effects';

export const REQUEST_STORY_EDIT = 'REQUEST_STORY_EDIT';

export const GET_STORIES = 'GET_STORIES';
export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORIES_FAILURE = 'RECEIVE_STORIES_FAILURE';

export const DELETE_STORY = 'DELETE_STORY';
export const DELETE_STORY_OK = 'DELETE_STORY_OK';
export const DELETE_STORY_FAILURE = 'DELETE_STORY_FAILURE';

export const EDIT_STORY = "EDIT_STORY";
export const EDIT_STORY_OK = "EDIT_STORY_OK";

export function deleteStory(id) {
  try{
    Fetch.DELETE(`/api/stories/${id}`, [], null, {});
  }
  catch(error){
    console.log(error);
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
