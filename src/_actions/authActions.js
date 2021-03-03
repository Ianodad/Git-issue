import { SIGN_UP, SIGN_IN} from "./types";


const SignIn = () => async (dispatch) => {

    dispatch({
      type: SIGN_IN,
      payload: "sign up",
    });
};

const SignUp = () => async (dispatch) => {
    dispatch({
      type: SIGN_IN,
      payload: "sign in",
    });
};