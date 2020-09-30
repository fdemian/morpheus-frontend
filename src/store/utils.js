const BASE_URL = "https://localhost:8888";
export const fetcher = url => fetch(BASE_URL + url).then(res => res.json());
