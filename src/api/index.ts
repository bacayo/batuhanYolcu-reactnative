import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhdHVoYW55b2xjdXVAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2JhY2F5byIsImlhdCI6MTY2ODY4NTM5NCwiZXhwIjoxNjY5MTE3Mzk0fQ.GfXhBpDn4rbAFUaYycLA_BvQQXkDALZrBGEUazMB4mU";
const baseURL = "https://upayments-studycase-api.herokuapp.com/api/";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const getData = async () => {
  const response = await axios.get("products");
  console.log(response.data);
  return response.data;
};
