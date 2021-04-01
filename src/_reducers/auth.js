/* eslint-disable no-duplicate-case */
import {SIGN_IN_ANONYMOUSLY, SIGN_IN_WITH_GITHUB, SIGN_OUT, GET_USER_STATE} from "../_actions/types";

const initialState = {
  user:"",
  auth: "",
  error: "",
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_STATE:
      // console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_IN_WITH_GITHUB:
      // console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_IN_ANONYMOUSLY:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};