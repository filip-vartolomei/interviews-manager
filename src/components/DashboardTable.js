import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt, faEdit, faAnchor } from '@fortawesome/fontawesome-free-solid';

import NumberCube from "./NumberCube";
import Tag from './Tag';
import DropDownContact from './DropDownContact';
import InfoLabelJob from './InfoLabelJob';

class DashboardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
    }

    componentDidMount() {
        let jobs = localStorage.getItem('jobs');
        if (jobs) {
            jobs = JSON.parse(jobs);
            this.setState({ jobs });
        }
    }

    render() {
        const job = this.state.jobs;
        return (
            <div>
                {Object.keys(this.state.jobs).map((k, index) => {
                    return (
                        <article className="columns is-mobile" key={index}>
                            <div className="column is-1 is-hidden-touch">
                                <NumberCube text={index} />
                            </div>
                            <div className="column">
                                <div className="content">
                                    <div className="is-marginless title-row">
                                        {/* <a href={"https://google.it"} target="_blank"> */}
                                        <div className="inline-flex is-hidden-desktop is-hidden-widescreen">
                                            <NumberCube text="01" />
                                        </div>

                                        <strong className="inline-flex title is-4 title-component">
                                            <Link to={`new/${job[k].companyId}`}>{job[k].companyName}</Link>

                                            <span className="icon">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </span>
                                        </strong>
                                        {/* </a> */}
                                    </div>
                                    <p>
                                        <small>{job[k].jobPosition}</small>
                                    </p>
                                    <div className="tags">
                                        {
                                            job[k].jobSkills.map((skill, index) => {
                                                return <Tag hasShadow={true} name={skill} key={index} />
                                            })
                                        }
                                    </div>
                                    <p>{job[k].jobDescription}</p>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <InfoLabelJob title="Contract Type" text={job[k].selectedContract} />
                                    </div>
                                    <div className="column">
                                        <InfoLabelJob title="Expected Salary" text={job[k].jobSalary} />
                                    </div>
                                    <div className="column">
                                        <InfoLabelJob title="Location" text={job[k].selectedCountry} />
                                    </div>
                                    <div className="column">
                                        <p className="heading">Contacts</p>
                                        <div className="title is-6">
                                            <DropDownContact
                                                contactEmail={job[k].contactEmail}
                                                contactPhone={job[k].contactPhone}
                                                contactSkype={job[k].contactSkype}
                                            />
                                        </div>
                                    </div>
                                    <div className="column">
                                        <p className="heading">Status Interview</p>
                                        <p className="title is-6 tooltip is-tooltip-bottom" data-tooltip={job[k].selectedStatus}>
                                            <progress className="progress" value="1" max="100"></progress>
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
                    );
                })}
            </div>
        );
    }
}

export default DashboardTable;