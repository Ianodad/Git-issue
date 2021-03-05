import React, { Component } from 'react';

import Layout from '../../Layouts/Layout';
import Card from '../../components/Card/Card.js';
import Table from '../../components/Table';
import { gitHubApiActions } from "../../_actions";

import { connect } from "react-redux";

// import githubApi from "../../api/githubApi";
const { getAllOwnerRepoIssues, getAllOwnerRepos }= gitHubApiActions;

class Main extends Component {

    componentDidMount= async()=>{
         this.props.getAllOwnerRepoIssues()
         this.props.getAllOwnerRepos()
      // this.setState({data: await this.props.getAllOwnerRepoIssues() })
    }
 
    render() {
      const { allOwnerRepos} = this.props
      const repoCount = allOwnerRepos.length
      console.log(allOwnerRepos[0].owner.login)
        return (
            <div>
                <Layout>
                    <div className="container-fluid mt-4">
                     <div className="username">
                       <h4>User Name: {allOwnerRepos[0].owner.login}</h4>
                     </div> 
                    <div className="repo-info row mt-4 pt-4">
                      <Card title={"Repos"} count={repoCount} style={{width:"30vh"}}/>   
                      <Card title={"Issue Count"} count={repoCount} style={{width:"30vh"}}/>   
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
