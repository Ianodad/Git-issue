import React, { Component } from "react";
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
    const { SignInWithGithub, SignInAnonymous } = this.props;

    return (
      <div className="auth row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <h3>GIT ISSIUES</h3>
          <SignInWith
            signInWithGithub={() => SignInWithGithub()}
            SignInAnonymously={() => SignInAnonymous}
          />
        </div>
        <div className="col-md-3"></div>
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
