const GRAPHQL_API = 'https://api.github.com/graphql'

const fetchUser = async () => {
    let response = await axios.post(
      'https://api.github.com/graphql',
      { query: query },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    let { data } = response.data;
    console.log(data);
  };
  
 export const GET_ALL_OWNER_REPOS = `

`