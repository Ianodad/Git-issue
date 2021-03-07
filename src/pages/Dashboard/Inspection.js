/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Layout from "../../Layouts/Layout";
import { Link } from 'react-router-dom';

import { gitHubApiActions } from "../../_actions";

import { connect } from "react-redux";

const { getAllOwnerRepoIssues, getFromDispatch, getRepoIssueComments }= gitHubApiActions;

class Inspection extends Component {
   componentDidMount= async()=>{
        
        const owner = this.props.match.params.owner
        const repo = this.props.match.params.repo
        const id = this.props.match.params.id
        //  this.props.getAllOwnerRepoIssues()
         this.props.getFromDispatch(id)
         this.props.getRepoIssueComments(owner, repo, id)
      // this.setState({data: await this.props.getAllOwnerRepoIssues() })
    }


  render() {
    const {issue} = this.props
    console.log(issue)
    if (!issue){
      return (
        <Layout>
          <div className="container-fluid text-center" style={{marginTop:"25%"}}>Nothing to show please select and issue form <span><Link to={"/issues"}>Issues</Link></span></div>
        </Layout>
      )
    } 
    return (
      <>
        <Layout>
          <div className="container-fluid">
            <div className="card mt-4">
              <div className="card-header" style={{backgroundColor: '#F1F0FF'}}>
                <div className="header row">
                <div className="inspection-title col">
                  <h2 style={{fontWeight:"900", color:"#443266"}}>{issue.title}</h2>
                </div>
                <div className="actions row float-right mx-3">
                  <div className="col">link</div>
                  <div className="col">github</div>
                  <div className="col">edit</div>
                </div>
                </div>
              </div>
              <div className="card-body">
                <div className="info row d-flex">
                  <div className="col">
                    <h3 style={{fontWeight:"900", color:"#443266"}}>Date</h3>
                    <p>{issue.created_at}</p>
                  </div>
                  <div className="col">
                    <h4 style={{fontWeight:"900", color:"#443266"}}>State</h4>
                    <p>{issue.state}</p>
                  </div>
                  <div className="col">
                    <h3 style={{fontWeight:"900", color:"#443266"}}>Locked</h3>
                    <p>{issue.locked}</p>
                  </div>
                </div>
                <div className="disc">
                  <h3 style={{fontWeight:"900", color:"#443266"}}>Description</h3>
                  <p>
                    {issue.body}
                  </p>
                </div>
                <div className="repo-detail">
                  <h3 style={{fontWeight:"900", color:"#443266"}}>Repository Details</h3>
                </div>
              </div>
            </div>
              {/* <div className="title ml-4 my-2">
                <h2 style={{fontWeight:"900", color:"#443266"}}>Comments</h2>
              </div>
            <div className="card mt-2 col-md-10" style={{ width: "75%" }}>
              <div className="card-body">
              <div className="commments">
                <div className="row" >
                  <div className="col-1">
                 <img
                      className="img-card"
                      src="https://via.placeholder.com/75C/O https://placeholder.com/"
                      alt="profile image"
                    ></img>
                  </div>
                  <div className=" col-11">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div> */}
          </div>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.gitHubApiData)
  return {
    issue: state.gitHubApiData.oneOwnerIssue,
  };
};

export default connect(mapStateToProps, {
  getAllOwnerRepoIssues,
  getRepoIssueComments,
  getFromDispatch
})(Inspection);
