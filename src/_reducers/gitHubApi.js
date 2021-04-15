/* eslint-disable no-duplicate-case */
import {GET_SEARCH_USER, GET_ALL_OWNER_REPOS, GET_ALL_OWNER_ISSUES, GET_ALL_OWNER_REPO_ISSUES, GET_ONE_OWNER_ISSUE, GET_REPO_ISSUES_COMMENTS ,GET_REPO_ISSUE_COMMENTS } from "../_actions/types";


const initialState = {
  userSearchResults:"",
  allOwnerRepos:"",
  allOwnerIssues:"", 
  allOwnerRepoIssues: "",
  oneOwnerIssue: "",
  repoIssuesComments:"",
  repoIssueComments:"",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_USER:
      // console.log(action.payload);
      return {
        ...state,
        userSearchResults: action.payload,
      };
    case GET_ALL_OWNER_REPOS:
      return {
        ...state,
        allOwnerRepos: action.payload,
      };
    case GET_ALL_OWNER_ISSUES:
      return {
        ...state,
        allOwnerIssues: action.payload,
      };
    case GET_ALL_OWNER_REPO_ISSUES:
      // console.log(action.payload);
      return {
        ...state,
        allOwnerRepoIssues: action.payload,
      };
    case GET_ONE_OWNER_ISSUE:
      // console.log(action.payload);
      return {
        ...state,
        oneOwnerIssue: action.payload,
      };
    case GET_REPO_ISSUES_COMMENTS:
      return {
        ...state,
        repoIssuesComments: action.payload,
      };
    case GET_REPO_ISSUE_COMMENTS:
      return {
        ...state,
        repoIssueComments: action.payload,
      };
    default:
      return state;
  }
};