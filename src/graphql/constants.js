import graphql from './client';
import {userRepoIssuesCommentsQuery, searchQuery} from './queries'

const query  = `{
    user(login: "fabpot") {
      repositories(first: 20 isFork: false) {
        nodes {
          id
          name
          url
          homepageUrl
          description
          createdAt
          issues(last: 20, states: OPEN) {
          nodes{
            id
            title
            createdAt
            url
            body
            createdAt
            comments(first:10){
              nodes{
                id
                body
                author{
                  avatarUrl
                  login
                  url
                }
              }
            }
          }
          }
        }
      }
    }
  }`

  
export const fetchReposWithIssues = async (variables) => {
    // console.log(userRepoIssuesCommentsQuery)
    let response = await graphql.post('/graphql', {query:userRepoIssuesCommentsQuery, variables})

    console.log(response)
    let { data } = response.data;
    // console.log(data);
  };

export const search = async (variables) => {
  let response = await graphql.post('/graphql', {query:searchQuery, variables:variables})
  console.log(response)
  // let {data} = response.data
  // console.log(data)

}