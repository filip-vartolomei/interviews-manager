import React, { Component } from 'react';

import DashboardHeader from './DashboardHeader';
import DashboardTable from './DashboardTable';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="dashboard">
                <section className="section">
                    <div className="container">
                        <DashboardHeader />
                        <DashboardTable />
                    </div>
                </section>
            </div>
        );
    }
}

export default Dashboard;