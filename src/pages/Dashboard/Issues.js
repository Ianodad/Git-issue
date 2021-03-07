import React, { Component } from 'react'
import Layout from '../../Layouts/Layout';
import Table from '../../components/Table/index';
import { gitHubApiActions } from "../../_actions";

import { connect } from "react-redux";
import { Link } from 'react-router-dom';


// import githubApi from "../../api/githubApi";
const { getAllOwnerRepoIssues, }= gitHubApiActions;
class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = { owner: "", repo: "" };
  }

  componentDidMount = async () => {
    const owner = this.props.match.params.owner
    // ? this.props.match.params.owner
    // : "octocat";
    const repo = this.props.match.params.repo
    // ? this.props.match.params.repo
    // : "hello-world";
    // console.log(this.props.match.params.username, this.props.match.params.repo);
    //  owner="octocat", repo="hello-world"
    // console.log(owner, repo);
    if (repo && owner){
      await this.props.getAllOwnerRepoIssues(owner, repo);
      this.setState({repo, owner});
    }
    console.log(this.props.match.params.html_url);
    // this.setState({data: await this.props.getAllOwnerRepoIssues() })
  };

  render() {
    const { repoIssues } = this.props;
    const { repo, owner} = this.state;
    console.log(repoIssues);
    // if (repoIssues.length <= 0) {
    //   return (
    //     <Layout>
    //       <div>Loading ....</div>
    //     </Layout>
    //   );
    // }
    return (
      <div>
        <Layout>
          <div className="container-fluid mt-4">
            {!repoIssues && (
              <div
                className="container-fluid text-center"
                style={{ marginTop: "25%" }}
              >
                Nothing to show please select a repository from{" "}
                <span>
                  <Link to={"/"}>Main</Link>
                </span>
              </div>
            )}
            {repoIssues && (
              <>
                <div className="repository my-4 mx-3">
                  <p className="mb-0 pb-0" style={{ color: "#C3C3E5" }}>
                    Selected repository
                  </p>
                  <a href={this.props.match.params} className="mt-0 pt-0">
                    <h4
                      className="mt-0"
                      style={{
                        fontWeight: "bold",
                        fontSize: "40px",
                        color: "#443266",
                      }}
                    >
                      {repo}
                    </h4>
                  </a>
                </div>
                <div className="repository-details mt-4">
                  {repoIssues && (
                    <Table data={repoIssues} owner={owner} repo={repo} style={{ width: "80%" }} />
                  )}
                </div>
              </>
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
    repoIssues: state.gitHubApiData.allOwnerRepoIssues,
  };
};

export default connect(mapStateToProps, {
  getAllOwnerRepoIssues,
  
})(Issues);
