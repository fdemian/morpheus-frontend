import Fetch from '../store/Fetch';

export const createCategory = async (name, description, token) => {
  try {
    const options = { token: token };
    const jsonData = JSON.stringify({ name: name,description: description});
    const data = await Fetch.POST('/api/categories', [], jsonData, options);

    return data;
  }
  catch(error) {
    throw(error);
  }
}

export const deleteCategory = async (id, token) => {
  try {
    const options = { token: token };
    const endpoint = '/api/categories/' + id;

    Fetch.DELETE(endpoint, [], null, options);
  }
  catch(error) {
    throw(error);
  }
}
