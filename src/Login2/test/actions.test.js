import { cloneableGenerator } from '@redux-saga/testing-utils';
import login,
{
  /* Functions */
  requestRegister,
  register,

  /* Constants */
  EMAIL_CHANGED,
  NAME_CHANGED,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  DATABASE_TYPE
} from '../Actions';
import Fetch from '../../store/Fetch';

describe("Login > Actions", () => {

  it("requestRegister()", () => {

    const registerValues = {
      username: null,
      email: null,
      password: null,
      passwordRepeat: null,
    }

    const result = {
      type: REGISTER_START,
      registerType: "database",
      code: null,
      values: registerValues,
      redirectURL: "/"
    };
    expect(requestRegister("database", null, registerValues, "/"))
          .toStrictEqual(result);
  })

  it("login()", () => {
    const result = {
     data: {
      password: "password",
      redirectURL: "",
      token: null,
      type: "database",
      username: "username"
     },
     type: "AUTH_START"
    };
    expect(login("username", "password")).toStrictEqual(result);
  })

  it("register > Register user > FAIL", async () => {
    const url = '/api/users';
    const dispatched = [];

    Fetch.POST = jest.fn(() => {
      return {
      }
    });

    const action = {
      code: "code",
      values: {
        username:"username",
        password: "password"
      },
      redirectURL: "/",
      registerType: "register"
    };
    const gen = register(action); // POST call.
    gen.next();

    const callFail = gen.throw({message: "error!"});
    const failType = callFail.value.payload.action;

    expect(failType.type).toStrictEqual(REGISTER_FAILURE);
  })

})
