import React from 'react';
import './SocialButton.css';

function index() {
    return (
        <div className="social-btn text-center row my-4">
          <div  className="btn btn-primary btn-lg col">
            <i className="fa fa-facebook" /> Facebook
          </div>
          <div href="#" className="btn btn-info btn-lg col">
            <i className="fa fa-twitter" /> Twitter
          </div>
          <div href="#" className="btn btn-danger btn-lg col">
            <i className="fa fa-google" /> Google
          </div>
        </div>
    );
}

export default index
