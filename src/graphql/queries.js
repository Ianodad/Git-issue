 export const userRepoIssuesCommentsQuery = `query($login: String!){
    user(login: $login) {
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
  }
  `

export const searchQuery = `query($name: String!) {
  search(query: $name, type: USER, first: 100) {
    edges {
      node {
        __typename
        ... on User {
          id
          login
          url
          avatarUrl
        }
      }
    }
    userCount
  }
}`
