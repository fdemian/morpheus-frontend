export function getMethodFromProps(props) {
  const matchParams = props.match.params;
  let method;

  if(matchParams === undefined || matchParams.method === undefined)
    method = 'login';
  else
    method = matchParams.method;

  return method;
}
