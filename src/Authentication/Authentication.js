import React from 'react';
import Fetching from '../Loading/LoadingIndicator';
import { Redirect } from "react-router-dom";
import AuthenticationError from './AuthenticationError';

function splitQueryString(queryString)
{
  const params = new URLSearchParams(queryString);
  const method = params.get("method");
  const code = params.get("code");
  const service = params.get("state");
  const redirectPath = params.get("redirectPath");
  const redirectUri = params.get("redirect_uri");

  // Error arrived.
  const errorCode = params.get("error_code");
  const errorMessage = params.get("error_message");

  return {
    method: method,
    code: code,
    service: service,
    redirectPath: redirectPath,
    redirectUri: redirectUri,
    errorCode: errorCode,
    errorMessage: errorMessage
  }

}

const AuthenticationScreen = (props) => {

  const queryString = props.location.search;
  const parsedParams = splitQueryString(queryString);
  const { performAuth, performRegistration } = props;

  if(parsedParams.errorCode !== null)
      return <AuthenticationError errorCode={parsedParams.errorCode} errorMessage={parsedParams.errorMessage} />;

  if(parsedParams.code) {

    let redirectURL ="/";

    if(parsedParams.redirectPath !== null && parsedParams.redirectPath !== "/")
       redirectURL = "/" + parsedParams.redirectPath;

    const BASE_URL = window.location.protocol + "//" + window.location.host;

    if(parsedParams.method === "login") {
     // El usuario redirigio para loguearse por oauth.
     // User y password nulos.
     const username = "";
     const password = "";

     performAuth(parsedParams.service, parsedParams.code, BASE_URL, username, password);
   }
   else {
     // Register.
   }

   return <Redirect to={redirectURL} />;

  }

  return <Fetching />;
}


export default AuthenticationScreen;
