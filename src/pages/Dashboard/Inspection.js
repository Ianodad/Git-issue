/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Layout from "../../Layouts/Layout";

class Inspection extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className="container-fluid">
            <div className="card mt-4">
              <div className="card-header row">
                <div className="inspection-title col">
                  <h3>TITTLE</h3>
                </div>
                <div className="actions row float-right mx-3">
                  <div className="col">link</div>
                  <div className="col">github</div>
                  <div className="col">edit</div>
                </div>
              </div>
              <div className="card-body">
                <div className="info row d-flex">
                  <div className="col">
                    <h4>Date</h4>
                    <p>01/01/2021</p>
                  </div>
                  <div className="col">
                    <h4>State</h4>
                    <p>Open</p>
                  </div>
                  <div className="col">
                    <h4>Locked</h4>
                    <p>False</p>
                  </div>
                </div>
                <div className="disc">
                  <h4>Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia,molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborumnumquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentiumoptio,
                    eaque rerum!
                  </p>
                </div>
                <div className="repo-detail">
                  <h3>Repository Details</h3>
                </div>
              <div className="title">
                <h4>Comments</h4>
              </div>
              </div>
            </div>
            <div className="card mt-2 col-md-10" style={{ width: "75%" }}>
              <div className="card-body">
              <div className="commments">
                <div className="row" >
                  <div className="col-1">
                 <img
                      className="img-card"
                      src="https://via.placeholder.com/75C/O https://placeholder.com/"
                      alt="profile image"
                    ></img>
                  </div>
                  <div className=" col-11">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Inspection;
