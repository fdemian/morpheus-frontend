import useSWR from 'swr';

export const useUserStories = (id) => {

  const { data, error, mutate } = useSWR(id ? `/api/users/${id}/stories`: null);

  return {
    userStories: data,
    error: error,
    isLoading: !data && !error,
    mutate: mutate
  }

}
