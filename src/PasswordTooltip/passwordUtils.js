import React from 'react';

export const commonPassList = [
  "123456",
  "123456789",
  "qwerty",
  "12345678",
  "111111",
  "1234567890",
  "1234567",
  "password",
  "123123",
  "987654321",
  "qwertyuiop",
  "mynoob",
  "123321",
  "666666",
  "18atcskd2w",
  "7777777",
  "1q2w3e4r",
  "654321",
  "555555",
  "3rjs1la7qe",
  "google"
];

export const getPasswordStength = (password) => {

  if (password && password.length > 9) {
    return 'ok';
  }

  if (password && password.length > 5) {
    return 'pass';
  }

  return 'poor';
}

export const passwordStatusMap = {
  ok: (
    <div className="password-strong">
      Strength: Strong
    </div>
  ),
  pass: (
    <div className="password-medium">
      Strength: Medium
    </div>
  ),
  poor: (
    <div className="password-weak">
      Strength: Weak
    </div>
  ),
};

export const passwordProgressMap = {
  ok: 'password-strong',
  pass: 'password-medium',
  poor: 'password-weak'
};
