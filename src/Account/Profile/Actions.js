import Fetch from '../../store/Fetch';

export const POST_AVATAR = 'POST_AVATAR';
export const POST_AVATAR_SUCESS = 'POST_AVATAR_SUCESS';
export const POST_AVATAR_FAILURE = 'POST_AVATAR_FAILURE';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCESS = 'UPDATE_USER_SUCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const postFile = (formData, username) => {
  const options = { isFile: true };
  const endpoint = "/api/uploads/" + username;
  Fetch.POST(endpoint, [], formData, options);
}

export const updateUser = (user) => {
  const options = { isFile: false };
  const endpoint = `/api/users/${user.id}`;
  Fetch.PUT(endpoint, [], user, options);
}

export const updatePassword = (currentPass, password, userId) => {
  const sendData = { 'password': currentPass, 'newpass': password };
  const endpoint = `/api/account/${userId}`;

  Fetch.PUT(endpoint, [], JSON.stringify(sendData), {});
}
