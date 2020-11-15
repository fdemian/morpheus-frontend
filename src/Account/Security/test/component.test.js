import React from 'react';
import { List, Button } from 'antd';
import Security from '../SecurityView';
import { render } from '../../../utils/testing-utils';
import '@testing-library/jest-dom';
import { useOptions } from '../Actions';
import ModifyEmailModal from '../ModifyEmailModal';
import ModifyPasswordModal from '../ModifyPassword/ModifyPasswordModal';
import {
  getPasswordErrors,
  _PASS_DO_NOT_MATCH,
  _PASS_TOO_SHORT,
  _PASS_TOO_COMMON,
  _PASS_NO_ERROR
} from '../ModifyPassword/utils';


jest.mock("../Actions", () => ({
  useOptions: () => ({
    isError: false,
    isLoading: false,
    options: {
      page: 1,
      options: [{ key: "comments", value: "ANONYMOUS" }]
    }
  })
}));

describe("<Security />", () => {
    const user = {
      id: 13,
      avatar: "pic.png",
      username: "admin",
      fullname: "",
      email: "test@gmail.com",
      role: "author",
      link: "/users/13/admin",
      signature: "Base signature.",
      about: "Base man.",
      loaded: true
    };

    it("Security view loading.", () => {
     const props = {
       updateUser: jest.fn(),
       mutate: jest.fn(),
       user: user,
       modifyPassword: jest.fn(),
       clearPasswordErrors: jest.fn(),
       isLoading: true,
       error: false,
       validated: false,
       commentsEnabled: 'OFF'
     };

     const { getByText } = render(<Security {...props} />);
     expect(getByText('Loading...')).toBeTruthy();
    })

    it("Renders correctly.", () => {
     const props = {
       updateUser: jest.fn(),
       mutate: jest.fn(),
       user: user,
       modifyPassword: jest.fn(),
       clearPasswordErrors: jest.fn(),
       isLoading: false,
       error: false,
       validated: false,
       commentsEnabled: 'OFF'
     };

     const { container } = render(<Security {...props} />);
     expect(container).toBeTruthy();
    })

    it("Modify email modal > Fetching", () => {
      const props = {
        user: user,
        isFetching: true,
        error: false,
        validated: false,
        updateEmail: jest.fn()
      }

      // Todo should test the spinner component not the class.
      const { getByTestId } = render(<ModifyEmailModal {...props} />);
      const spinnerClass = "ant-spin ant-spin-lg ant-spin-spinning modal-spin";
      expect(getByTestId("spin-indicator")).toHaveClass(spinnerClass);
    })

    it("Modify email modal > Validated", () => {
      const props = {
        user: user,
        isFetching: false,
        error: false,
        validated: true,
        updateEmail: jest.fn()
      }

      const validatedText = "Successfully updated email!";

      // Todo should test the spinner component not the class.
      const { getByText } = render(<ModifyEmailModal {...props} />);
      const componentText = getByText(validatedText);
      expect(componentText).toBeTruthy();
    })

    it("Modify email modal > Normal render", () => {
      const props = {
        user: user,
        isFetching: false,
        error: false,
        validated: false,
        updateEmail: jest.fn()
      }

      const { container } = render(<ModifyEmailModal {...props} />);
      expect(container).toBeTruthy();
    })

    /*
    it("Modify password modal > Normal render", () => {

      const props = {
        modifyPassword: jest.fn(),
        clearErrorsFn: jest.fn()
      }

      const { getByRole } = render(<ModifyPasswordModal {...props} />);

      const inputs = getByRole('input');

      expect(inputs.length).toBe(3);
    })*/

    it("Password strength checker", () => {

      // Password too shoort.
     const shortPasswordErr = getPasswordErrors("asd", "asd");
     expect(shortPasswordErr.error).toBe(true);
     expect(shortPasswordErr.type).toBe(_PASS_TOO_SHORT);

     // Common password.
     const commonPassErr = getPasswordErrors("password", "password");
     expect(commonPassErr.error).toBe(true);
     expect(commonPassErr.type).toStrictEqual(_PASS_TOO_COMMON);

     // Pass do not match.
     const noMatchErr = getPasswordErrors("megapassword!123", "notmatchingpass");
     expect(noMatchErr.error).toBe(true);
     expect(noMatchErr.type).toStrictEqual(_PASS_DO_NOT_MATCH);

     // Success case.
     const passwordSuccess = getPasswordErrors("megapassword!123", "megapassword!123");
     expect(passwordSuccess.error).toBe(false);
     expect(passwordSuccess.type).toStrictEqual(_PASS_NO_ERROR);

    })

});
