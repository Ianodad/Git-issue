import React from 'react'
import SocialButton from "../../components/SocialButton";
import './SignUp.css'
function SignUp() {
    return (
        <div>
          <div className="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2 className="text-center">Sign Up</h2>       
        <div>
            <SocialButton/>
        </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="required" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" required="required" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" required="required" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
          </div>
          <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
            <a href="#" className="float-right">Forgot Password?</a>
          </div>        
        </form>
        <p className="text-center"><a href="#">Sign in Account</a></p>
      </div>
        </div>
    )
}

export default SignUp
