import React, { Component } from 'react';


import Layout from '../../Layouts/Layout';
import Card from '../../components/Card/Card.js';
import Table from '../../components/Table';
import { gitHubApiActions } from "../../_actions";

import { connect } from "react-redux";
var _ = require('lodash');


// import githubApi from "../../api/githubApi";
// github api action imported from actions 
const { getAllOwnerRepoIssues, getAllOwnerRepos }= gitHubApiActions;

class Main extends Component {

    componentDidMount= async()=>{
         this.props.getAllOwnerRepoIssues()
         this.props.getAllOwnerRepos( JSON.parse(localStorage.getItem("selectUser")))
      // this.setState({data: await this.props.getAllOwnerRepoIssues() })
    }
 
    render() {
      const { allOwnerRepos} = this.props
      const repoCount = allOwnerRepos.length
      const issue_count = _.sumBy(allOwnerRepos, repo => {
        return repo.open_issues;
});
      // console.log(allOwnerRepos[0].owner.login)
      if (!allOwnerRepos){
        return (
          <Layout>
              <div>Nothing to see here</div>
          </Layout>
        )
      }
        return (
            <div>
                <Layout>
                    <div className="container-fluid mt-4">
                     <div className="username">
                       <a href={allOwnerRepos[0].owner} className="">link</a>
                       <h4 className="text-decoration-underline">{allOwnerRepos[0].owner.login}</h4>
                     </div> 
                    <div className="repo-info row mt-4 pt-4">
                      <Card title={"Repos"} count={repoCount} style={{width:"30vh"}}/>   
                      <Card title={"Issue Count"} count={issue_count} style={{width:"30vh"}}/>   
                    </div>
                    </div>
                    <div className="issue mt-4">
                         {allOwnerRepos && <Table repo data={allOwnerRepos} style={{width:'80%'}}/>}
                    </div>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  // console.log(state.gitHubApiData)
  return {
    allOwnerRepos: state.gitHubApiData.allOwnerRepos,
    repoIssues: state.gitHubApiData.allOwnerRepoIssues,
  };
};

export default connect(mapStateToProps, {
  getAllOwnerRepoIssues,
  getAllOwnerRepos
})(Main);
