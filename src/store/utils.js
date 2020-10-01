const BASE_URL = "http://localhost:8888";
export const fetcher = url => fetch(url).then(res => res.json());
