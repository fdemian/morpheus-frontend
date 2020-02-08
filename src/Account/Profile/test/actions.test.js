import { cloneableGenerator } from '@redux-saga/testing-utils';
import postFile,
{
  /* Functions */
  requestPostAvatar,
  requestUpdateUser,
  updateUser,

  /* Constants */
  POST_AVATAR,
  POST_AVATAR_SUCESS,
  POST_AVATAR_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCESS,
  UPDATE_USER_FAILURE
} from '../Actions';
import user from './data';

describe("Account > Profile > Actions", () => {

  const formData = new FormData();

  it("requestPostAvatar()", () => {
    const result = {
      type: POST_AVATAR,
      formData: formData
    };
    expect(requestPostAvatar(formData))
          .toStrictEqual(result);
  })

  it("requestUpdateUser()", () => {
    const result = {
      type: UPDATE_USER,
      user: user
    };
    expect(requestUpdateUser(user))
          .toStrictEqual(result);
  })

})
