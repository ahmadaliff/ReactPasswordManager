import axios from "axios";

export const callAPI = async ({
  endpoint = "/password" /*default value*/,
  method = "GET",
  headers,
  data,
}) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const option = {
    baseURL: BASE_URL,
    method: method,
    url: endpoint,
    headers: headers,
    data,
  };
  const response = await axios(option);
  return response?.data;
};
