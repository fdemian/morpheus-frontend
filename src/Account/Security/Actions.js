export const useOptions = () => {
  const { data, error, isLoading } = useSWR('/api/options');

  return {
    options: data,
    isLoading: !error && !data,
    isError: error
  }
}
