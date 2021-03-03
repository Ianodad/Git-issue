import { Tab } from 'bootstrap';
import React, { Component } from 'react'
import Layout from '../../Layouts/Layout';
import Table from '../../components/Table/index';

class Issues extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <div className="container-fluid mt-4">
                        <Table/>

                    </div>
                </Layout>
            </div>
        )
    }
}

export default Issues
