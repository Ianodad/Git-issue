

import React, { Component } from 'react'
import useWindowSize from "../_helpers/useWindowSize" 
import SideMenu from "../components/Sidebar"
import Navbar from "../components/Navbar"


import "./Layout.css";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
          WindowSize : window.innerHeight
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
        this.setState({WindowSize: window.innerHeight})
        console.log(window.innerHeight)
    }
    render() {
        const {children} = this.props
        const {WindowSize}= this.state
        const width = WindowSize-55
        return (
            <div className="container-fluid" id="layout">
                <div className="col-md-12 row" id="top-section" style={{height:"55px"}}>
                    <div className="col-md-2" id="layout-logo">
                        <h1>LOGO</h1>
                    </div>
                    <div className="col-md-10" id="layout-menu">
                        <Navbar/>
                    </div>
                </div>
                 <div className="col-md-12 row" id="bottom-section">
                    <div className="col-md-2" id="layout-sidemenu" style={{height:width}}>
                       <SideMenu/>
                    </div>
                    <div className="col-md-10" id="layout-dashboard">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout
