import useSWR from 'swr';

export const useDraft = ({ id }) => {

  const { data, error, mutate } = useSWR(id !== null ? `/api/drafts?id=${id}` : null);

  return {
    draft: data,
    error: error,
    isLoading: !data && !error,
    mutate: mutate
  }

}
