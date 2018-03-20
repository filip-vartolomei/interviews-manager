import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt, faEdit, faAnchor, faAngleDown, faEnvelope, faPhone } from '@fortawesome/fontawesome-free-solid';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';

import NumberCube from "./NumberCube";


class DashboardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {/* <s>What's the company name?</s> <br />
                <s>What's the country?</s> <br />
                <s>Website</s> <br />
                <s>Job url</s> <br />
                <s>Job position</s> <br />
                <s>Contract duration</s> <br />
                <s>Expected anual salary</s> <br />
                <s>Job Skills</s> - Colorare quelli che appartengono alle mie Skill <br />
                <s>Job description</s> <br />
                <s>Status interview</s> <br /> */}

                <article className="columns is-mobile">
                    <div className="column is-1 is-hidden-touch">
                        <NumberCube text="01" />
                    </div>
                    <div className="column">
                        <div className="content">
                            <div className="is-marginless title-row">
                                {/* <a href={"https://google.it"} target="_blank"> */}
                                    <div className="inline-flex is-hidden-desktop is-hidden-widescreen">
                                        <NumberCube text="01" />   
                                    </div>

                                    <strong className="inline-flex title is-4 title-component">
                                        <Link to="new/banana">Hub. Production</Link>
                                        
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </span>
                                    </strong>
                                {/* </a> */}
                            </div>
                            <p>
                                <small>Frontend developer</small>
                            </p>
                            <div className="tags">
                                <span className="tag has-shadow">One</span>
                                <span className="tag has-shadow">Two</span>
                                <span className="tag has-shadow">Three</span>
                                <span className="tag has-shadow is-success">Four</span>
                                <span className="tag has-shadow">Five</span>
                                <span className="tag has-shadow is-info">Six</span>
                                <span className="tag has-shadow">Seven</span>
                                <span className="tag has-shadow">Eight</span>
                                <span className="tag has-shadow">Nine</span>
                                <span className="tag has-shadow">Ten</span>
                                <span className="tag has-shadow">Eleven</span>
                                <span className="tag has-shadow">Twelve</span>
                                <span className="tag has-shadow">Thirteen</span>
                                <span className="tag has-shadow">Fourteen</span>
                                <span className="tag has-shadow">Fifteen</span>
                                <span className="tag has-shadow">Sixteen</span>
                                <span className="tag has-shadow">Seventeen</span>
                                <span className="tag has-shadow">Eighteen</span>
                                <span className="tag has-shadow">Nineteen</span>
                                <span className="tag has-shadow">Twenty</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                            </p>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <p className="heading">Contract Period</p>
                                <p className="title is-6">Permanent</p>
                            </div>
                            <div className="column">
                                <p className="heading">Expected Salary</p>
                                <p className="title is-6">35.000.00</p>
                            </div>
                            <div className="column">
                                <p className="heading">Location</p>
                                <p className="title is-6">London</p>
                            </div>
                            <div className="column">
                                <p className="heading">Contacts</p>
                                <p className="title is-6">
                                    <div className="dropdown is-hoverable">
                                    <div className="dropdown-trigger">
                                        <a className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu4">
                                        <span>Contact List</span>
                                        <span className="icon is-small">
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                        <div className="dropdown-content">
                                            <div className="dropdown-item">
                                                <p className="menu-hoverable-item">
                                                    <span className="icon is-small">
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </span>
                                                    <a >name@gmail.com</a>
                                                </p>
                                            </div>
                                            <div className="dropdown-item">
                                                <p className="menu-hoverable-item">
                                                    <span className="icon is-small">
                                                        <FontAwesomeIcon icon={faPhone} />
                                                    </span>
                                                    <a >+011234567890</a>
                                                </p>
                                            </div>
                                            <div className="dropdown-item">
                                                <p className="menu-hoverable-item">
                                                    <span className="icon is-small">
                                                        <FontAwesomeIcon icon={faLinkedin} />
                                                    </span>
                                                    <a >Linkedin HR</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </p>
                            </div>
                            <div className="column">
                                <p className="heading">Status Interview</p>
                                <p className="title is-6 tooltip is-tooltip-bottom" data-tooltip="Not yet interviewed">
                                    <progress className="progress" value="1" max="100">None</progress>
                                </p>
                            </div>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                    <span className="icon is-small tooltip" data-tooltip="Job Website">
                                        <FontAwesomeIcon icon={faAnchor} />
                                    </span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small tooltip" data-tooltip="Company Website">
                                        <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                    
                </article>




            </div>

        );
    }
}

export default DashboardTable;