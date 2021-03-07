import React from "react";
import { FaSearch  } from 'react-icons/fa';
import { connect } from "react-redux";

import { RiLogoutBoxRLine } from "react-icons/ri";
import {Form, FormField, SubmitButton} from '../../components/Forms';

import { useHistory } from 'react-router-dom';

import "./Navbar.css"



import { gitHubApiActions } from "../../_actions";
const { getSearchUser }= gitHubApiActions;

function Index({getSearchUser}) {
   const history = useHistory();



  const handleSearch=({query})=>{
    getSearchUser(query);
    // history.push(`/search/${query}`);
    // window.location = `/search/${query}`
  }

  return (
    <>
      <nav className="navbar navbar-expand-md  mt-1" style={{height:"55px"}} >
        {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse col" id="navbarCollapse">
          <Form
            className="form-inline"
            initialValues={{ query: "" }}
            onSubmit={(values) => handleSearch(values)}
          >
            <FormField
              type="text"
              className="form-control"
              placeholder="Search"
              required="required"
              id="query"
            />
            <SubmitButton
              style={{backgroundColor:"#443266", color:"white"}}
              className="input-group-append ml-1"
              icon={<FaSearch />}
            />
          </Form>
        </div>
        <div className="navbar-nav">
          <p className="nav-item col">Username</p>
          <a href="#" className="nav-item col">
            <RiLogoutBoxRLine />
          </a>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state.gitHubApiData)
  return {
    searchResults: state.gitHubApiData.userSearchResults
  };
};

export default connect(mapStateToProps, {
  getSearchUser
})(Index)