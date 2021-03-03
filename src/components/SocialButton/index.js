import React from 'react';
import './SocialButton.css';

function index() {
    return (
        <div className="social-btn text-center row my-4">
          <a href="#" className="btn btn-primary btn-lg col">
            <i className="fa fa-facebook" /> Facebook
          </a>
          <a href="#" className="btn btn-info btn-lg col">
            <i className="fa fa-twitter" /> Twitter
          </a>
          <a href="#" className="btn btn-danger btn-lg col">
            <i className="fa fa-google" /> Google
          </a>
        </div>
    );
}

export default index
