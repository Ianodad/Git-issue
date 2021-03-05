/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Layout from "../../Layouts/Layout";
import { Link } from 'react-router-dom';

import { gitHubApiActions } from "../../_actions";

import { connect } from "react-redux";

const { getAllOwnerRepoIssues, getFromDispatch }= gitHubApiActions;

class Inspection extends Component {
   componentDidMount= async()=>{
         this.props.getAllOwnerRepoIssues()
         this.props.getFromDispatch(this.props.match.params.id)
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
              <div className="card-header row">
                <div className="inspection-title col">
                  <h3>{issue.title}</h3>
                </div>
                <div className="actions row float-right mx-3">
                  <div className="col">link</div>
                  <div className="col">github</div>
                  <div className="col">edit</div>
                </div>
              </div>
              <div className="card-body">
                <div className="info row d-flex">
                  <div className="col">
                    <h4>Date</h4>
                    <p>{issue.created_at}</p>
                  </div>
                  <div className="col">
                    <h4>State</h4>
                    <p>{issue.state}</p>
                  </div>
                  <div className="col">
                    <h4>Locked</h4>
                    <p>{issue.locked}</p>
                  </div>
                </div>
                <div className="disc">
                  <h4>Description</h4>
                  <p>
                    {issue.body}
                  </p>
                </div>
                <div className="repo-detail">
                  <h3>Repository Details</h3>
                </div>
              <div className="title">
                <h4>Comments</h4>
              </div>
              </div>
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
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.gitHubApiData)
  return {
    issue: state.gitHubApiData.oneOwnerIssue,
  };
};

export default connect(mapStateToProps, {
  getAllOwnerRepoIssues,
  getFromDispatch
})(Inspection);
