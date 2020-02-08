import { cloneableGenerator } from '@redux-saga/testing-utils';
import signIn, {

  /* Functions */
  startAuth,
  logout,
  signOut,

  /* Constants */
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../Actions';



describe("Authentication > Actions", () => {

  it("startAuth()", () => {
    const result = {
     data: {
      password: "pass",
      redirectURL: "/",
      token: "",
      type: "database",
      username: "user",
     },
     type: AUTH_START
    };
    const type = "database";
    const token = "";
    const redirectURL = "/";
    const username = "user";
    const password = "pass";
    const functionRes = startAuth(type, token, redirectURL, username, password);
    expect(functionRes).toStrictEqual(result);
  })

  it("logout()", () => {
    const result = { type: LOGOUT_START };
    expect(logout()).toStrictEqual(result);
  })

  it("signOut() > SUCCESS", async () => {
    const result = { type: LOGOUT_SUCCESS };
    const action = {
      data: {
        code: "",
        type: "database",
        redirectURL: "/",
        username: "user",
        password: "pass"
      }
    };
    const gen = signOut(action); // POST call.
    const call = gen.next();
    const successAction = call.value.payload.action;

    expect(successAction).toStrictEqual(result);
  })

  it("signOut() > FAIL", async () => {

    const result = { type: LOGOUT_FAILURE };
    const action = {
      data: {
        code: "",
        type: "database",
        redirectURL: "/",
        username: "user",
        password: "pass"
      }
    };

    const gen = signOut(action); // POST call.
    gen.next();
    const callFail = gen.throw({message: "error!"}).value;
    const failType = callFail.payload.action;

    expect(failType).toStrictEqual(result);
  })

})
