import React from "react";
import "./SignInWith.css";
import { FaGithub, FaUser } from "react-icons/fa";

function SignInWith({ signInWithGithub, signInAnonymous }) {
  return (
    // <div className="signinwith">
    //   <div className="with-card" >
    //     <button className="btn-github col-6 my-4" onClick={signInWithGithub}>
    //       <span className="btn-gradient mx-3">
    //         <FaGithub/>
    //       </span>
    //       <span className="btn-text">Github Login</span>
    //     </button>

    //     <button className="btn-green col-6 my-4" onClick={signInAnonymous} disabled>
    //       <span className="btn-gradient mx-3">
    //         <FaUser/>
    //       </span>
    //       <span className="btn-text">Anonymous Login</span>
    //     </button>
    //   </div>
    // </div>
    <div className="signinwith social-buttons">
      <div className="github-button my-3">
        <button className="neo-button" onClick={signInWithGithub}>
          <i className="fa fa-github fa-4x">
            <FaGithub />
          </i>
          <p className="github-text">Github Login</p>
        </button>
      </div>
      <div className="sign-in-anonymous my-3">
        <button className="neo-button" onClick={signInAnonymous} disabled>
          <i className="fa fa-user fa-4x">
            <FaUser />
          </i>
          <p className="any-text">Anonymous Login</p>
        </button>
      </div>
    </div>
  );
}

export default SignInWith;
