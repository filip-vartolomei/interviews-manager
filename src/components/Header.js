import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isActive: false
        };
    }

    handleNavbarActivation = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    onCloseNavbar = () => {
        this.setState({
            isActive: false
        });
    }

    render() {
        const navbarClass = classNames({
            'navbar-menu': true,
            'is-active': this.state.isActive
        });
        return (
            <nav aria-label="main navigation" className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" onClick={this.onCloseNavbar} className="navbar-item">
                            <strong>MyInterviews</strong>
                        </Link>
                        <button data-target="navMenu" onClick={this.handleNavbarActivation} className="button navbar-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div id="navMenu" className={navbarClass}>
                        <div className="navbar-start">
                            <Link to="/profile" onClick={this.onCloseNavbar} className="navbar-item">
                                <span>My Profile</span>
                            </Link>
                            <Link to="/settings" onClick={this.onCloseNavbar} className="navbar-item">
                                <span>Settings</span>
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <Link to="/new" onClick={this.onCloseNavbar} className="button is-primary">ADD</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Header;