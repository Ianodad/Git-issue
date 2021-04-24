import graphql from './client';
import {userRepoIssuesCommentsQuery} from './queries'

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

  const variables = {login:"fabpot"}

export const fetchReposWithIssues = async () => {
    let response = await graphql.post('/graphql', {query:userRepoIssuesCommentsQuery, variables:variables})

    // console.log(response)
    let { data } = response.data;
    console.log(data);
  };

export const search = async () => {
  let response = await graphql.post('/graphql', {query:query})
  console.log(response)
  // let {data} = response.data
  // console.log(data)

}