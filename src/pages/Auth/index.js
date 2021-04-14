import React, { Component } from "react";
import firebase from "../../config/firebase";

// import SignIn from './SignIn';
import SignUp from "./SignUp";
import SignInWith from "./SignInWith";

import { authActions } from "../../_actions";

import { connect } from "react-redux";

import "./index.css";

// import githubApi from "../../api/githubApi";
const { SignInWithGithub, SignInAnonymous } = authActions;

class Index extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { SignInWithGithub, SignInAnonymous, history } = this.props;
    console.log(history);
    return (
      <div className="auth row">
        {/* <div className="col-md-4"></div> */}
        <div className="col-md-6 mx-auto">
          <h2 className="mx-auto mb-4 display-3" id="git-issue" style={ {'paddingTop':'3em'} }><strong>GIT ISSUE</strong></h2>
          <div className="mt-4">
          <SignInWith
            signInWithGithub={() => SignInWithGithub(history)}
            SignInAnonymously={() => SignInAnonymous}
          />
          </div>
        </div>
        {/* <div className="col-md-3"></div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.gitHubApiData)
  return {};
};

const mapDispatchToProps = { SignInWithGithub, SignInAnonymous };

export default connect(mapStateToProps, mapDispatchToProps)(Index);
