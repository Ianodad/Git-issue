import React, { Component } from 'react'
import Layout from '../../Layouts/Layout';

class Inspection extends Component {
    render() {
        return (
          <div>
            <Layout>
              <div className="container-fluid">
                <div className="card">
                  <div className="card-header">
                    <h3>TITTLE</h3>
                  </div>
                  <div className="card-body">
                    <div className="info">
                      <h4>Date</h4>
                      <p>01/01/2021</p>
                      <h4>State</h4>
                      <p>Open</p>
                      <h4>Locked</h4>
                      <p>False</p>
                    </div>
                    <div className="disc">
                      <h4>Description</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia,molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborumnumquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentiumoptio, eaque rerum!
                      </p>
                    </div>
                    <div className="repo-detail">
                        <h3>Repository Details</h3>

                    </div>
                    <div className="commments">
                        <h4>Commments</h4>
                        <div className="card">
                            <img className="img-card" src="#" alt="profile image">

                            </img>
                            <div className="card-body">
                                <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </Layout>
          </div>
        );
    }
}

export default Inspection
