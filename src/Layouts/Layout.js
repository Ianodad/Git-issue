

import React, { Component } from 'react'
import SideMenu from "../components/Sidebar"
import Navbar from "../components/Navbar"

import { authActions } from "../_actions";

import { connect } from "react-redux"
// import logo from "../assets/img/GitIssue Logo.png"

import "./Layout.css";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
          WindowSize: {width : window.innerWidth, height : window.innerHeight}
        }
        this.handleResize = this.handleResize.bind(this);
    }
    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
      window.addEventListener("resize", null);
    }
    handleResize(WindowSize, event) {
        this.setState({WindowSize: { width: window.innerWidth, height: window.innerHeight}})
    }
    render() {
        const {children, SignOut, auth} = this.props
        const {WindowSize}= this.state
        const height = WindowSize.height-65

        return (
            <>
            <div className={`container-fluid ${auth}`} id="layout">
                <div className="col-md-12 row py-0" id="top-section" style={{height:"60px"}}>
                    <div className="col-md-2 col-12 row mx-auto py-2" id="layout-logo">
                        <div className="col-2 my-auto" id="logo">
                            {/* <img src={require('../assets/img/GitIssue-Logo.svg')} alt="logo" /> */}
                             <img src={require('../assets/img/GitIssue_Logo.png').default}  alt="logo" />
                            {/* <h1 className="mx-auto" id="logo-main" style={{fontSize:"3vh",}}>gitIssue</h1> */}
                        </div>
                        {/* <div className="text-right col-9 my-auto">
                            <p>Username</p>
                        </div> */}
                  </div>
                    <div className="col-md-10 layout" id="layout-menu">
                        <Navbar />
                    </div>
                </div>
                 <div className="col-md-12 row " id="bottom-section">
                     <div className="col-md-2 px-0" id="layout-sidemenu" style={{height:height}}>
                       <SideMenu/>
                    </div>
                    <div className="col-md-10" id="layout-dashboard overflow-auto" style={{height:height}}>
                        {children}
                    </div>
                </div>
            </div>
           </>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.gitHubApiData)
    return {
    }
  };

  const mapDispatchToProps = {};
  
  export default connect(mapStateToProps, 
    mapDispatchToProps
  )(Layout);


