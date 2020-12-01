import useSWR from 'swr';

export const useCategory = (id) => {

  const { data, error } = useSWR(`/api/categories/${id}`);

  return {
    category: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const useCategoryStories = (id) => {

  const shouldFetch = id != null;
  const { data, error } = useSWR(shouldFetch ? `/api/categories/${id}/1` : null);

  return {
    stories: data,
    isLoading: !error && !data,
    isError: error
  }

}
