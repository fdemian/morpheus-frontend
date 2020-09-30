import 'isomorphic-fetch';

//const DEFAULT_API_ROOT = `${window.location.protocol}//${window.location.host}`;

function inOptions(options, value) {
  return(
    (options !== null) &&
    (options !== undefined) &&
    (value in options)
  );
}

function buildHeaders(method, content, isAuth, token, isFile) {

  let jsonContent = null;

  let fetchHeaders = {
    'Content-Type': 'text/plain',
    'Accept': 'application/json'
  };

  // For GET and HEAD requests the body will be null.
  if(content !== null && !isFile)
  {
    jsonContent = JSON.stringify(content);
  }
  else {
    if(isFile) {
      jsonContent = content;
      fetchHeaders = {
       'Accept': '*/*',
      };
    }
  }

  if (isAuth) {
      fetchHeaders.Authorization = `Bearer ${token}`;
  }

  return {
    method,
    mode: 'cors',
    cache: 'default',
    body: jsonContent,
    headers: fetchHeaders
  };
}

function request(method, endpoint, content, options) {

  let token = null;
  let isFile = false;

  if (inOptions(options, 'token')) {
    token = options.token;
  }

  let isAuth = false;

  if (token !== null && token !== undefined) {
    isAuth = true;
  }

  if (inOptions(options, 'isFile')) {
    isFile = options.isFile;
  }
  else
    isFile = false;

  const headers = buildHeaders(method, content, isAuth, token, isFile);

  return {
    endpoint: endpoint,
    headers
  }

}

function * doRequest (params){
    const response = yield fetch(params.endpoint, params.headers);
    const jsonResponse = yield response.json();

    if(!response.ok)
      throw new Error("error");

    return jsonResponse;
}


function doRequestSync (params){
    const response = fetch(params.endpoint, params.headers)
                    .then(res => res.json());

    return response;
}

class Fetch {

  static GET(endpoint, types, options) {
    const req = request('GET', endpoint, null, options);
    return doRequest(req);
  }

  static POST(endpoint, types, content, options) {
    const req = request('POST', endpoint, content, options);
    return doRequestSync(req);
  }

  static PUT(endpoint, types, content, options) {
    const req = request('PUT', endpoint, content, options);
    return doRequest(req);
  }

  static DELETE(endpoint, types, content, options) {
    const req = request('DELETE', endpoint, content, options);
    return doRequestSync(req);
  }

}

export default Fetch;
