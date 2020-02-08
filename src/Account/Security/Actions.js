import Fetch from '../../store/Fetch';
import { select, put, call } from 'redux-saga/effects';

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCESS = 'CHANGE_PASSWORD_SUCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';
export const CLEAR_PASSWORD_ERRORS = 'CLEAR_PASSWORD_ERRORS';

export const UPDATE_SEC_INFO = 'UPDATE_SEC_INFO';
export const SEC_INFO_UPDATED = 'SEC_INFO_UPDATED';
export const SEC_INFO_UPDATE_FAIL = 'SEC_INFO_UPDATE_FAIL';

export function clearPasswordErrors(){
  return { type: CLEAR_PASSWORD_ERRORS }
}

export function requestChangePassword(currentPass, newPass){
  return {
    type: CHANGE_PASSWORD,
    currentPass: currentPass,
    newPass: newPass
  }
}

export function requestUpdateSec(secInfo){
  return {
    type: UPDATE_SEC_INFO,
    secInfo: secInfo
  }
}

export function* updateSecInfo(action){
    const { secInfo } = action;
    const state = yield select();
    const token = state.session.token;
    const options = { token: token, isFile: false };
    const endpoint = "/api/options";

    try {
       yield call(Fetch.PUT, endpoint, [], JSON.stringify(secInfo), options);
       yield put({type: SEC_INFO_UPDATED, data: secInfo});

    }
    catch(error){
      yield put({type: SEC_INFO_UPDATE_FAIL});
    }

}

export default function* changePassword(action) {
   const state = yield select();
   const { currentPass, newPass } = action;

   const sendData = {
      'password': currentPass,
      'newpass': newPass
   };

   const token = state.session.token;
   const id = state.session.user.id;
   const options = { token: token, isFile: true };
   const endpoint = "/api/account/" + id;

   try {
      yield call(Fetch.PUT, endpoint, [], JSON.stringify(sendData), options);
      yield put({type: CHANGE_PASSWORD_SUCESS});
   }
   catch(error){
      yield put({type: CHANGE_PASSWORD_FAILURE});
   }
}
