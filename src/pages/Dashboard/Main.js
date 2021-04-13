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
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {};
   
  }

  componentDidMount = async () => {

    const owner = this.props.match.params.name
    ? this.props.match.params.name
    : JSON.parse(localStorage.getItem("selectUser")) ? JSON.parse(localStorage.getItem("selectUser")) :JSON.parse(localStorage.getItem("USER")).login; 
    this.props.getAllOwnerRepoIssues();
    this.props.getAllOwnerRepos(owner);

    // this.setState({data: await this.props.getAllOwnerRepoIssues() })
  };

  sumBy = (data) => {
    return _.sumBy(data, (repo) => {
      return repo.open_issues;
    });
  };

  countBy = (data)=>{
    return  _.pick(_.countBy(data, 'has_issues'),  [true])

  }
  render() {
    const { allOwnerRepos, history} = this.props;
    const repoCount = allOwnerRepos.length;
    const issue_count = this.sumBy(allOwnerRepos);
    const countSum = this.countBy(allOwnerRepos)
    const issuePercent = (100 * countSum.true)/allOwnerRepos.length
    console.log(allOwnerRepos)
    console.log(history)
    // console.log(allOwnerRepos)
    // console.log(allOwnerRepos[0].owner.login)
    if (!allOwnerRepos) {
      return (
        <Layout>
          <div>Nothing to see here</div>
        </Layout>
      );
    }
    return (
      <div>
        <Layout>
          <div className="container-fluid mt-4">
            <div className="username">
              <p className="mb-0 pb-0" style={{ color: "#C3C3E5" }}>
                Selected user
              </p>
              <a href={allOwnerRepos[0].owner} className="mt-0 pt-0">
                <h4
                  className="mt-0"
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#443266",
                  }}
                >
                  {allOwnerRepos[0].owner.login}
                </h4>
              </a>
            </div>
            <div className="repo-info row mt-4 pt-4 d-flex wrap">
              <Card
                title={"Repos"}
                count={repoCount}
                style={{
                  width: "18em",
                  backgroundColor: "#C3C3E5",
                  margin: "0px 10px",
                }}
              />
              <Card
                title={"Open Issue Count"}
                count={issue_count}
                style={{ width: "18em", backgroundColor: "#C3C3E5" }}
              />
              <Card
                title={"Repository with Issues"}
                count={issuePercent.toFixed(2)+"%"}
                style={{ width: "18em", backgroundColor: "#C3C3E5" }}
              />
            </div>
          </div>
          <div className="issue mt-4">
            {allOwnerRepos && (
              <Table main={true} data={allOwnerRepos} style={{ width: "80%" }} />
            )}
          </div>
        </Layout>
      </div>
    );
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
