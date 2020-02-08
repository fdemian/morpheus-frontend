import { cloneableGenerator } from '@redux-saga/testing-utils';
import changePassword,
{
  /* Functions */
 clearPasswordErrors,
 requestChangePassword,
 requestUpdateSec,
 updateSecInfo,

  /* Constants */
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCESS,
  CHANGE_PASSWORD_FAILURE,
  CLEAR_PASSWORD_ERRORS,
  UPDATE_SEC_INFO,
  SEC_INFO_UPDATED,
  SEC_INFO_UPDATE_FAIL
} from '../Actions';

describe("Account > Security > Actions", () => {

  it("clearPasswordErrors()", () => {
    const result = { type: CLEAR_PASSWORD_ERRORS };
    expect(clearPasswordErrors()).toStrictEqual(result);
  })

  it("requestChangePassword()", () => {
    const result = {
      type: CHANGE_PASSWORD,
      currentPass: "pass1",
      newPass: "pass2"
    };
    expect(requestChangePassword("pass1", "pass2"))
          .toStrictEqual(result);
  })

  it("requestUpdateSec()", () => {
    const secInfo = {  key: 'comments', value: 'OFF' };
    const result = {
      type: UPDATE_SEC_INFO,
      secInfo: secInfo
    };
    expect(requestUpdateSec(secInfo))
          .toStrictEqual(result);
  })

})
