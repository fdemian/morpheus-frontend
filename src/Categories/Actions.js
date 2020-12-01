import Fetch from '../store/Fetch';
import _data from './initialData';
import useSWR from 'swr';

export const useCategories = () => {
  const { data, mutate, error } = useSWR('/api/categories', { initialData: _data });

  return {
    categories: data.items,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}

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
