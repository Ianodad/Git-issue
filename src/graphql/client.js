import {create} from 'apisauce'; 
const GRAPHQL_API = 'https://api.github.com/graphql'

// define base api url the export it as a global variable
const graphql = create({
    baseURL:'https://api.github.com',
    headers: { Authorization: `Bearer ${process.env.REACT_APP_GIT_HUB_TOKEN}` } 
})
// console.log(graphql)

export default graphql;