
import gitHubApi from "../api/gitHubApi";
import {GET_SEARCH_USER, GET_ALL_OWNER_REPOS,  GET_ALL_OWNER_ISSUES, GET_ALL_OWNER_REPO_ISSUES, GET_ONE_OWNER_ISSUE, GET_REPO_ISSUES_COMMENTS ,GET_REPO_ISSUE_COMMENTS} from "./types";



// NOTE settings
// default username == octocat
// default repo == "Hello-World"
// search user 
const getSearchUser = (query) => async (dispatch) => {

  try {
    const {data} = await gitHubApi.getSearchUser(query)
    localStorage.setItem("userSearchResult", JSON.stringify(data.items))

    dispatch({
       type: GET_SEARCH_USER,
       payload: data.items,
     });

   if (data) {
    window.location=`/search/${query}`
  }
  } catch (error) {
    console.log(error) 
  }
   

}
// this function is responsible for get all user repos.. base on github api
const getAllOwnerRepos =(owner) => async (dispatch) => {
  const {data} = await gitHubApi.getAllOwnerRepos(owner)
  // console.log(data)
  dispatch({
      type: GET_ALL_OWNER_REPOS ,
      payload: data,
    });
}
// get all repo issues.
const  getAllOwnerRepoIssues = (owner, repo) => async (dispatch) => {
    const {data}= await gitHubApi.getAllOwnerRepoIssues(owner, repo)

    dispatch({
      type: GET_ALL_OWNER_REPO_ISSUES,
      payload: data,
    });
};


// get specific issue straight from redux state..
const getFromDispatch = (number) => async (dispatch, getState) => {
  // getAllOwnerRepoIssues()
  const data = await getState().gitHubApiData.allOwnerRepoIssues;

  try {
    const result = data.find(item=>item.number == number)
    dispatch({
        type:GET_ONE_OWNER_ISSUE,
        payload: result,
      });
    
  } catch (error) {
    console.log(error)  
  }
  // console.log(data);
  // console.log(result)

  
}

export const gitHubApiActions = {
    getAllOwnerRepoIssues,
    getAllOwnerRepos,
    getFromDispatch,
    getSearchUser
};