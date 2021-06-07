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

export const useStories = (page) => {
  const pageParam = page ? "page?="+page : "";
  const { data, mutate, error } = useSWR(`/api/stories${pageParam}`);

  return {
    data: data,
    error: error,
    isLoading: !data && !error,
    mutate: mutate
  };
}
