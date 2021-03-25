import React from "react";
import "./SignInWith.css";
import { FaGithub, FaUser } from 'react-icons/fa';

function SignInWith({ signInWithGithub, signInAnonymous }) {
  return (
    <div className="signinwith">
      <div className="with-card" >

        <button className="btn-github col-6 my-4" onClick={signInWithGithub}>
          <span className="btn-gradient mx-3">
            <FaGithub/>
          </span>
          <span className="btn-text">Github Login</span>
        </button>

        <button className="btn-green col-6 my-4" onClick={signInAnonymous} disabled>
          <span className="btn-gradient mx-3">
            <FaUser/>
          </span>
          <span className="btn-text">Anonymous Login</span>
        </button>
      </div>
    </div>
  );
}

export default SignInWith;
