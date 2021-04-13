import firebase from "../config/firebase";

import {
  SIGN_IN_ANONYMOUSLY,
  SIGN_IN_WITH_GITHUB,
  SIGN_OUT,
  GET_USER_STATE,
} from "./types";

const SignInWithGithub = (history) => async (dispatch) => {
  
  console.log("github");
  const provider = new firebase.auth.GithubAuthProvider();

  // await firebase.auth().signInWithRedirect(provider);
  try {
    const { additionalUserInfo } = await firebase
      .auth()
      .signInWithPopup(provider);
    const user = additionalUserInfo.profile;

    //  console.log(user.login)
    const userGithub = {
      login: user.login,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
      id: user.id,
      name: user.name,
      repos_url: user.repos_url,
      type: user.type,
    };

    if (user) {
      localStorage.setItem('USER', JSON.stringify(userGithub));
      dispatch({
        type: SIGN_IN_WITH_GITHUB,
        payload: userGithub,
      });

      history.push('/')
      // window.location = `/`;
    }

    // if (userGithub) {
    // }
  } catch (error) {
    console.log(error);

    dispatch({
      type: SIGN_IN_WITH_GITHUB,
      payload: null,
    });
  }

  //  console.log(additionalUserInfo)
  dispatch({
    type: SIGN_IN_WITH_GITHUB,
    payload: "sign up",
  });
};

const SignInAnonymous = () => async (dispatch) => {
  await firebase.auth().signInAnonymously();

  // window.location=`/`
  dispatch({
    type: SIGN_IN_ANONYMOUSLY,
    payload: "sign in",
  });
};

const SignOut = () => async (dispatch) => {
  // console.log("sign")
  try {
    await firebase.auth().signOut();
    localStorage.removeItem("USER");

    dispatch({
      type: SIGN_OUT,
      payload: {},
    });

    window.location = `/auth`;
  } catch (error) {
    console.log(error);
  }
};


const getUserState = () => async (dispatch) => {
  const userState = await JSON.parse(localStorage.getItem("USER"));
  // console.log(await JSON.parse(localStorage.getItem("USER")))
  console.log(userState)

  if (userState) {
    dispatch({
      type: GET_USER_STATE,
      payload: userState,
    });
  }
};
// export all action functions as an object
export const authActions = {
  SignInWithGithub,
  SignInAnonymous,
  getUserState,
  SignOut,
};
