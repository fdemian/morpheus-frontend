import { startAuth } from '../Authentication/Actions';
import Fetch from '../store/Fetch';
import { put, call } from 'redux-saga/effects';

/* UPDATE FIELDS */
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const NAME_CHANGED = 'NAME_CHANGED';
export const USERNAME_CHANGED = 'USERNAME_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';

/* REGISTER USER */
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

const DATABASE_TYPE = "database";

export default function login(username, password){
   return startAuth(DATABASE_TYPE, null, "", username, password);
}

export function requestRegister(registerType, code, values, redirectURL){

  return {
    type: REGISTER_START,
    registerType: registerType,
    code: code,
    values: values,
    redirectURL: redirectURL
  };
}

export function* register(action){

  const {
    code,
    values,
    redirectURL,
    registerType
  } = action;

  let jsonData = null;
  let registerData = null;

  if(registerType === "database"){
    registerData = {
      username: values.username,
      password: values.password,
      email: values.email,
      name: "",
      type: registerType
    };
  }
  else {
    registerData = {
      code: code,
       type: registerType,
       redirectURL: redirectURL
    };
  }

  jsonData = JSON.stringify(registerData);

  try {
    const postData = yield call(Fetch.POST, "/api/users", [], jsonData);
    yield put({ type: REGISTER_SUCCESS, data: postData });
  }
  catch(error){
    yield put({ type: REGISTER_FAILURE });
  }
}