import { Tab } from 'bootstrap';
import React, { Component } from 'react'
import Layout from '../../Layouts/Layout';
import Table from '../../components/Table/index';
import { gitHubApiActions } from "../../_actions";

import { connect } from "react-redux";

// import githubApi from "../../api/githubApi";
const { getAllOwnerRepoIssues, }= gitHubApiActions;
class Issues extends Component {
     componentDidMount= async()=>{
       const owner =  this.props.match.params.username
       const repo = this.props.match.params.repo
       console.log(this.props.match.params.username, this.props.match.params.repo)
         this.props.getAllOwnerRepoIssues(owner, repo)
      // this.setState({data: await this.props.getAllOwnerRepoIssues() })
    }
    render() {
        const {repoIssues} = this.props

        return (
            <div>
                <Layout>
                    <div className="container-fluid mt-4">
                        {repoIssues && <Table data={repoIssues} style={{width:'80%'}}/>}
                    </div>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  // console.log(state.gitHubApiData)
  return {
    repoIssues: state.gitHubApiData.allOwnerRepoIssues,
  };
};

export default connect(mapStateToProps, {
  getAllOwnerRepoIssues,
  
})(Issues);
