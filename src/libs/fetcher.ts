import axios, { AxiosError } from "axios";

const proxyPath = process.env.NODE_ENV === "production" ? "" : "/proxy";

export const callAuth = () => {
  // return axios.get(
  //   `${proxyPath}/cegidmanagement/account/signin?redirecturl=/members`
  // );
  window.location.href = `${proxyPath}/account/signin?redirecturl=/members`;
};

export const fetcher = (url: string) =>
  axios
    .get(proxyPath + url)
    .then((res) => res.data)
    .catch((e: AxiosError) => {
      if (e.response && e.response.status === 401) {
        // console.log(e.response.data);
        // console.log(e.response.status);
        // console.log(e.response.headers);
        return callAuth();
      }
      throw e;
    });
