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

export function getCookie(name) {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
}
