import Fetch from '../store/Fetch';
import useSwr from 'swr';

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

export const useUser = (id) => {
  const shouldFetch = id >= 0 && id!= null;
  const { data, mutate, error } = useSwr(shouldFetch ? `/api/users/${id}` : null);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}

export const newLogin = (username, password) => {

  const endpoint = "/api/auth";
  const jsonData = JSON.stringify({
     code: null,
     type: DATABASE_TYPE,
     redirectURL: "",
     username: username,
     password: password
  });

  const data = Fetch.POST(endpoint, [], jsonData, null);

  return data;
}
