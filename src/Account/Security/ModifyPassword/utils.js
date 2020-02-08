import { commonPassList } from '../../../PasswordTooltip/passwordUtils';

export const _PASS_DO_NOT_MATCH = '_PASS_DO_NOT_MATCH';
export const _PASS_TOO_SHORT = '_PASS_TOO_SHORT';
export const _PASS_TOO_COMMON = '_PASS_TOO_COMMON';
export const _PASS_NO_ERROR = '_PASS_NO_ERROR';

export const getPasswordErrors = (newPass, newPassRepeat) => {
  let errorMessage;
  let errorType;
  let error = false;

  const passwordInList = commonPassList.filter(p => p === newPass).length > 0;
  const passwordsMatch = newPass === newPassRepeat;
  const passwordTooShort = newPass.length < 6;

  if(passwordInList || !passwordsMatch || passwordTooShort)
    error = true

  if(error){

    if(passwordTooShort) {
      errorMessage = "Password must be at least 6 characters long.";
      errorType = _PASS_TOO_SHORT;
    }
    else{
     if(passwordInList){
       errorMessage = "Password is too common. Please, choose a different one";
       errorType = _PASS_TOO_COMMON
     }
     else {
        if(!passwordsMatch){
          errorMessage = "Passwords do not match.";
          errorType = _PASS_DO_NOT_MATCH;
        }
      }
    }

    return {
      error: error,
      message: errorMessage,
      type: errorType
    };
  }

  return {
    error: false,
    message: '',
    type: _PASS_NO_ERROR
  };
}
