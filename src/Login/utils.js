export function getMethodFromProps(props) {
  const matchParams = props.match.params;
  let method;

  if(matchParams === undefined || matchParams.method === undefined)
    method = 'login';
  else
    method = matchParams.method;

  return method;
}

export const isLoggedIn = () => localStorage.getItem('loggedInUser') !== null;
export const getLoginData = () => localStorage.getItem('loggedInUser');
export const setLoginData = (id) => localStorage.setItem('loggedInUser', id);
