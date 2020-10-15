import { isLoggedIn, logout } from '../Login/utils';

export const fetcher = url =>
  fetch(url)
  .then(response => {
    if(response.status === 401) {
      const loggedIn = isLoggedIn();
      if(loggedIn)
        logout();
    }

    if(response.ok)
      return response.json();
  });
