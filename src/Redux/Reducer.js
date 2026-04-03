import * as types from "./Actions";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (oldState=initialState, { type, payload }) => {
  switch (type) {
    case types.fetch_api_request:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.fetch_api_success:
      return {
        ...oldState,
        isError:false,
        isLoading: false,
        data:payload
      };

    default:
      return oldState;
  }
};
