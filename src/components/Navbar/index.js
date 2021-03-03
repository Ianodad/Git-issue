import React from "react";
import { FaSearch  } from 'react-icons/fa';
import { RiLogoutBoxRLine } from "react-icons/ri";


function index() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light row">
        {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse mb-3 col" id="navbarCollapse">
          <form className="form-inline">
            <div className="input-group">                    
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-append">
                <button type="button" className="btn btn-secondary"><FaSearch/></button>
              </div>
            </div>
          </form>
        </div>
        <div className="navbar-nav">
            <p className="nav-item nav-link">Username</p>
            <a href="#" className="nav-item nav-link"><RiLogoutBoxRLine/></a>
        </div>
      </nav>
    </>
  );
}

export default index;
