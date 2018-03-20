import React, { Component } from 'react';
import Hero from './Hero';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="settings">
                <Hero title="Settings" subtitle="Change some behaviors on this site!" />

            </div>
        );
    }
}

export default Settings;