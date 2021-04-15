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
    this.state = { results: "" };
  }

  componentDidMount = async () => {
    // console.log(JSON.parse(localStorage.getItem("userSearchResult")))
    this.setState({
      results: this.props.searchResults,
    });    // console.log(this.props.userSearchResults)
    // this.setState({results:this.props.userSearchResults})
  };

  selectUser = (name) => {
    console.log(name);
    localStorage.setItem("selectUser", JSON.stringify(name));
  };

  render() {
    const { results } = this.state;
    if (!results){
      return (
        <div>Searching .......</div>
      )
    }
    // console.log(results);
    return (
      <Layout>
        <div className="container-fluid mt-4">
          <div className="">
            <h3>Search Results</h3>
          </div>
          <div className="display-results row">
            {results &&
              results.map((item, key) => {
                return (
                  <Card
                    key={key}
                    title={item.login}
                    image={item.avatar_url}
                    count={false}
                    onSubmit={() => {
                      this.selectUser(item.login);
                    }}
                  />
                );
              })}
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.gitHubApiData.userSearchResults
  };
};

export default connect(mapStateToProps, {
  getSearchUser
})(Search);