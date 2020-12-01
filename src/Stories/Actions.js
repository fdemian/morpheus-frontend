import Fetch from '../store/Fetch';
import useSWR from 'swr';

export function deleteStory(id) {
  try{
    Fetch.DELETE(`/api/stories/${id}`, [], null, {});
  }
  catch(error){
    throw(error);
  }
}

export const useStories = () => {
  const { data, mutate, error } = useSWR("/api/stories");

  return {
    data: data,
    error: error,
    isLoading: !data && !error,
    mutate: mutate
  };
}
