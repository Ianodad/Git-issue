import React, { useState, } from 'react'
import { NavLink } from "react-router-dom";

import './Sidebar.css'
function Index() {
    const [path] = useState(window.location.pathname);

    let main,issues,inspection;
    if (path === "/"){
      main = true;
      // console.log(path)
    } else if (path=="/issues") {
      issues = true;
    } else if (path=="/inspection"){
      inspection = true;
    }
    return (
      <div className="list-group borderless mt-4 border-0 mx-0" id="sidebar" >
        <NavLink className="list-group-item list-group-item-action border-0 bg-transparent" style={{color: main ? 'grey':'#8C489F'}} to="/">        
          <i className="fa fa-home" /> Main
        </NavLink>
        <NavLink className="list-group-item list-group-item-action border-0 bg-transparent " style={{color: issues ? 'grey':'#8C489F'}} to="/issues">
          <i className="fa fa-camera" /> Issues
        </NavLink>
        <NavLink className="list-group-item list-group-item-action border-0 bg-transparent" style={{color: inspection ? 'grey':'#8C489F' }} to="/inspection">
          <i className="fa fa-music" /> Inspection
        </NavLink>
      </div>
    );
}

export default Index
