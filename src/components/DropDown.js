import React, { Component } from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }
    handleClickOutside = (evt) => {
        this.setState({
            isActive: false
        })
    }
    handleDropDown = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        const dropdownClass = classNames({
            'dropdown': true,
            'is-active': this.state.isActive
        });
        return (
            <div className={dropdownClass}>
                <div className="dropdown-trigger" onClick={this.handleDropDown}>
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown button</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="#" className="dropdown-item">
                            Dropdown item
                                </a>
                        <a className="dropdown-item">
                            Other dropdown item
                                </a>
                        <a href="#" className="dropdown-item is-active">
                            Active dropdown item
                                </a>
                        <a href="#" className="dropdown-item">
                            Other dropdown item
                                </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            With a divider
                                </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default onClickOutside(DropDown);