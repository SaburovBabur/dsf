import useSWR from "swr";
import API, { getCookie } from "config/API";

const ACCESS_TOKEN = getCookie("ACCESS_TOKEN");

function useAPI(url) {
  const swr = useSWR([url, ACCESS_TOKEN], API);

  return swr;
}

export default useAPI;
