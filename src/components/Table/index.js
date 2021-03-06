import React from 'react'
import { NavLink } from 'react-router-dom';

import {  BiLinkAlt } from "react-icons/bi";
var dayjs = require('dayjs')


const Index=({style, data, repo}) => {
   
  
  // console.log(data)
  return (
      <div className="container-fluid">
        <table className="table">
        <thead className="" style={{backgroundColor: '#F1F0FF'}}>
          { repo ? (<tr>
            <th scope="col">Name</th>
            <th scope="col">Has Issues</th>
            <th scope="col">Date</th>
            <th scope="col">Open Issue Count</th>
            <th scope="col">Link</th>
            <th scope="col">Detail</th>
          </tr>): (
            <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">State</th>
            <th scope="col">User</th>
            <th scope="col">Link</th>
            <th scope="col">Detail</th>
          </tr>
          )}
        </thead>
        <tbody>
          {data && data.map((item, key)=>{
            if (repo) return (
            <tr key={key}>
            <td scope="row">{item.name}</td>
            <td>{item.has_issues}</td>
            <td>{dayjs(item.created_at).format('DD/MM/YYYY')}</td>
            <td>{item.open_issues_count}</td>
            <td><a href={item.html_url} target="_blank" className="nav-item nav-link"><BiLinkAlt/></a></td>
            <td><NavLink to={`/issues/${item.owner.login}/${item.name}`} type="button" class="btn" style={{backgroundColor:"#443266", color:"white"}}>More</NavLink></td>
          </tr>
            )
            return (
          <tr key={key}>
            <td scope="row">{item.number}</td>
            <td>{item.title}</td>
            <td>{item.state}</td>
            <td>{item.user.login}</td>
            <td><a href={item.html_url} target="_blank" className="nav-item nav-link"><BiLinkAlt/></a></td>
            <td><NavLink to={`/inspection/${item.number}`} type="button" class="btn" style={{backgroundColor:"#443266", color:"white"}} >More</NavLink></td>

          </tr>
            )
          })}
        </tbody>
      </table>

      </div>
    );
}

export default Index
