import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

import './Sidebar.css'
function Index() {
    const [path, setPath] = useState(window.location.pathname);
    // useEffect(() => {
    //   useState(window.location.pathname)
    // });
    let main,issues,inspection;
    if (path === "/"){
      main = true;
      console.log(path)
    } else if (path=="/issues") {
      issues = true;
    } else if (path=="/inspection"){
      inspection = true;
    }
    return (
      <div className="list-group borderless mt-2 border-0 m-0">
        <NavLink to="/">
        <a href="#" className="list-group-item list-group-item-action border-0" style={{backgroundColor: main ? 'blue':'' }}>
          <i className="fa fa-home" /> Main
        </a>
        </NavLink>
        <NavLink to="/issues">
        <a href="#" className="list-group-item list-group-item-action border-0" style={{backgroundColor: issues ? 'blue':'' }}>
          <i className="fa fa-camera" /> Issues
        </a>
        </NavLink>
        <NavLink to="/inspection">
        <a href="#" className="list-group-item list-group-item-action border-0" style={{backgroundColor: inspection ? 'blue':'' }}>
          <i className="fa fa-music" /> Inspection
        </a>
        </NavLink>
      </div>
    );
}

export default Index
