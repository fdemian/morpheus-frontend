import Fetch from '../store/Fetch';
import useSWR from 'swr';

export const useStory = (id) => {
  const shouldFetch = id >= 0 && id!== null && id!== undefined;
  const { data, mutate, error } = useSWR(shouldFetch ? `/api/stories?id=${id}` : null);

  return {
    story: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}
