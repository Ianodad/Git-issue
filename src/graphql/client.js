import {create} from 'apisauce'; 
const GRAPHQL_API = 'https://api.github.com/graphql'

// define base api url the export it as a global variable
const apiClient = create({
    baseURL:'https://api.github.com',
})
export default apiClient;