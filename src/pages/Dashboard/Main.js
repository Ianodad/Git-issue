import React, { Component } from 'react';
import Layout from '../../Layouts/Layout';
import Card from '../../components/Card/Card.js';
import Table from '../../components/Table';


class Main extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <div className="container-fluid mt-2">
                    <Card title={"Repos"} count={11} style={{width:"30vh"}}/>   

                    </div>
                    <div className="issue mt-4">
                         <Table style={{width:'80%'}}/>   
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Main
