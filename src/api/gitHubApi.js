// import base url plus api sauce features
import client from './client';

// define endpoint for different data sources
const endPointGetIssues = '/repos'
const endpointAllIssues = '/issues'
const endPointAllUserRepos ='/users' 


// get all repos belong to a user
const getAllOwnerRepos = (owner="octocat")=>client.get(`${endPointAllUserRepos}/${owner}/repos`)
const getAllOwnerRepoIssues =(owner="octocat", repo="hello-world")=>client.get(`${endPointGetIssues}/${owner}/${repo}/issues`)
const getOneOwnerIssue = (owner="octocat", repo="hello-world", issue_number='42')=>client.get(`${endPointGetIssues}/${owner}/${repo}/issues/${issue_number}`)

const getRepoIssuesComments =(owner="octocat", repo="hello-world")=>client.get(`${endPointGetIssues}/${owner}/${repo}/issues/comments`)
const getRepoIssueComments = (owner="octocat", repo="hello-world", issue_number='42')=>client.get(`${endPointGetIssues}/${repo}/issues/${issue_number}/comments`)

// export all function as an object
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllOwnerRepos,
    getAllOwnerRepoIssues,
    getOneOwnerIssue,
    getRepoIssuesComments,
    getRepoIssueComments
}
//https://api.github.com/repos/octocat/hello-world/issues
// /repos/octocat/hello-world/issues
// /repos/octocat/hello-world/issues