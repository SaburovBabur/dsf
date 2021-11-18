import Axios from "axios";

const API = Axios.create({
  baseURL: "http://b.biznesclub.algopharm.uz/",
});

export default (url, token, ...rest) => {
  if (token) {
    return API.get(
      url,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      ...rest
    );
  }

  return API;
};
