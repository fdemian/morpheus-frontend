import Fetch from '../store/Fetch';
import useSWR from 'swr';

export const REQUEST_STORY = 'REQUEST_STORY';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const RECEIVE_STORY_FAILURE = 'RECEIVE_STORY_FAILURE';

export const REGISTER_TEMP_USER = 'REGISTER_TEMP_USER';

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
