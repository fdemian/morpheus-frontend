import Fetch from '../store/Fetch';
import { select, put, call } from 'redux-saga/effects';
import {
  RECEIVE_STORY,
  RECEIVE_STORY_FAILURE,
} from '../Story/Actions';

export const REQUEST_DRAFT_EDIT = 'REQUEST_DRAFT_EDIT';

export const GET_DRAFTS = 'GET_DRAFTS';
export const RECEIVE_DRAFTS = 'RECEIVE_DRAFTS';
export const RECEIVE_DRAFTS_FAILURE = 'RECEIVE_DRAFTS_FAILURE';

export const DELETE_DRAFT = 'DELETE_DRAFT';
export const DELETE_DRAFT_OK = 'DELETE_DRAFT_OK';
export const DELETE_DRAFT_FAILURE = 'DELETE_DRAFT_FAILURE';

export const EDIT_DRAFT = "EDIT_DRAFT";
export const EDIT_DRAFT_OK = "EDIT_DRAFT_OK";

export const GET_DRAFT = "GET_DRAFT";

export function requestDrafts(){
  return {
    type: GET_DRAFTS
  };
}

export function requestDeleteDraft(id){
  return {
    type: DELETE_DRAFT,
    id: id
  };
}

export function* getDraft(action){
  try {
    const endpoint = "/api/drafts?id=" + action.Id;
    const draft = yield call(Fetch.GET, endpoint);
    yield put({type: RECEIVE_STORY, data: draft});
  }
  catch(error) {
    yield put({type: RECEIVE_STORY_FAILURE, error: error})
  }
}

export default function* loadDrafts(){
  try {
    const drafts = yield call(Fetch.GET, '/api/drafts');
    yield put({type: RECEIVE_DRAFTS, data: drafts});
  }
  catch(error) {
    yield put({type: RECEIVE_DRAFTS_FAILURE, error: error})
  }
}

export function* deleteDraft(action){
   const state = yield select();
   const token = state.session.token;
   const options = { token: token };

   try {
    const endpoint = '/api/stories/' + action.id;
    const data = yield call(Fetch.DELETE, endpoint, [], null, options);
    yield put({type: DELETE_DRAFT_OK, data: data});
  }
  catch(error){
    yield put({type: DELETE_DRAFT_FAILURE});
  }
}

export function requestEditDraft(id, drafts){

  const draftToEdit = drafts.filter(s => s.id === id)[0];

  return {
    type: REQUEST_DRAFT_EDIT,
    id: id,
    story: draftToEdit
  };
}

export function* editDraft(action){
   const state = yield select();
   const drafts = state.drafts.drafts;
   const draftToEdit = drafts.filter(s => s.id === action.id)[0];

   yield put({type: EDIT_DRAFT_OK, data: draftToEdit});
}
