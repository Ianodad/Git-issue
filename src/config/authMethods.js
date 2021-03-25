import  firebase from './firebase-config';

export const githubProvider = firebase.auth.GithubProvider()
export const anonymousSignProvider = firebase.auth.SignInAnonymously()