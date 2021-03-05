import React, { Component } from 'react'
import Layout from "../../Layouts/Layout";
import { connect } from "react-redux";
import Card from '../../components/Card/Card.js';
import { NavLink } from "react-router-dom";



import { gitHubApiActions } from "../../_actions";


const { getSearchUser }= gitHubApiActions;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {results: "", query:""};
  }

  componentDidMount = async()=>{
    console.log(JSON.parse(localStorage.getItem("userSearchResult")))
    this.setState({results: JSON.parse(localStorage.getItem("userSearchResult"))})
      // await this.props.getSearchUser(this.props.match.params.q)
  // console.log(this.props.userSearchResults)
  // this.setState({results:this.props.userSearchResults})    
  }
  

  render() {
        const {searchResults}= this.props
        const {results}= this.state
        // console.log(results)
        console.log(searchResults)
        return (
            <Layout>
                
                <div className="container-fluid mt-4">
                <div className=""><h3>
                  Search Results
                  </h3>
                  </div>
                  <div className="display-results row">
                    { results && results.map((item, key)=>{
                      return (
                        <NavLink to={`/main/${item.login}`}>
                          <Card
                            key={key}
                            title={item.login}
                            image={item.avatar_url}
                            count={false}
                          />
                        </NavLink>
                      );
                    }
                 )}

                  </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state.gitHubApiData)
  return {
    searchResults: state.gitHubApiData.userSearchResults
  };
};

export default connect(mapStateToProps, {
  getSearchUser
})(Search);