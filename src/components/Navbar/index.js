import React, { useEffect, useState } from 'react'
import { FaSearch  } from 'react-icons/fa';
import { connect } from "react-redux";

import { RiLogoutBoxRLine } from "react-icons/ri";
import {Form, FormField, SubmitButton} from '../../components/Forms';
import { withRouter } from 'react-router'


import "./Navbar.css"



import { gitHubApiActions, authActions } from "../../_actions";
const { getSearchUser }= gitHubApiActions;
const { SignOut, getUserState } = authActions

function Index({getSearchUser, SignOut, getUserState, user, history}) {
  //  const {history} = props
   const [userInfo, setUserInfo] = useState(false);


   useEffect(() => {
     getUserState()

    }, [getUserState])

  const handleSearch=({query})=>{
    // console.log(props)
    getSearchUser(query, history);
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
          <p className="nav-item col">{ JSON.parse(localStorage.getItem("USER")) ? JSON.parse(localStorage.getItem("USER")).login : "Username" }</p>
          <a href="#" className="nav-item col" onClick={()=>SignOut()}>
            <RiLogoutBoxRLine />
          </a>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {

  return {
    searchResults: state.gitHubApiData.userSearchResults,
    user: state.auth,
  };
};

export default connect(mapStateToProps, {
  getSearchUser,
  getUserState,
  SignOut
})(withRouter(Index))