import Axios from "axios";

const API = Axios.create({
  baseURL: "http://b.biznesclub.algopharm.uz/",
});

export const HTTP = API;

export default (url, token) => {
  if (token) {
    return API.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return API;
};

export function getCookie(name) {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
}
