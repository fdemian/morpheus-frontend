import useSWR from 'swr';

export const useDrafts = () => {
  const { data, error } = useSWR('/api/drafts');

  return {
    drafts: data,
    erro: error,
    isLoading: !data && !error
  }
}
