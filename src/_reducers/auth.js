/* eslint-disable no-duplicate-case */
import { SIGN_IN, SIGN_UP } from "../_actions/types";


const initialState = {
  auth: "",
  error: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(action.payload);
      return {
        ...state,
        auth: action.payload,
      };
    case SIGN_UP:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};