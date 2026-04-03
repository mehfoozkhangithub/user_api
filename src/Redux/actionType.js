import * as types from "./Actions";
import axios from "axios";

const get_api_request = () => {
  return {
    type: types.fetch_api_request,
  };
};
const get_api_success = (data) => {
  return {
    type: types.fetch_api_success,
    payload: data,
  };
};
const get_api_failure = () => {
  return {
    type: types.fetch_api_failure,
  };
};

export const get_api = ()=>(dispatch) => {
  dispatch(get_api_request());
  return axios
    .get("https://api.github.com/users")
    .then((res) => dispatch(get_api_success(res.data)))
    .catch(() => dispatch(get_api_failure()));
};
