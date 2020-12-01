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

export const useOptions = () => {

  const { data, mutate, error } =  useSWR('/api/options');

  return {
    options: data ? data.options : data,
    error: error,
    isLoading: !data && !error,
    mutate: mutate
  }

}
