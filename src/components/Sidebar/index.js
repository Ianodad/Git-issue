import React from 'react'
import './Sidebar.css'
function index() {
    return (
      <div className="list-group borderless mt-2 border-0 m-0">
        <a href="#" className="list-group-item list-group-item-action border-0 active">
          <i className="fa fa-home" /> Main
        </a>
        <a href="#" className="list-group-item list-group-item-action border-0">
          <i className="fa fa-camera" /> Issues
        </a>
        <a href="#" className="list-group-item list-group-item-action border-0">
          <i className="fa fa-music" /> Inspection
        </a>
      </div>
    );
}

export default index
