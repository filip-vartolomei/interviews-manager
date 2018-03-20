import React, { Component } from 'react';
import PropTypes from "prop-types";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone, faClock, faAt, faLink } from '@fortawesome/fontawesome-free-solid';
import { faSkype } from '@fortawesome/fontawesome-free-brands';

import Hero from './Hero';
import TagInputWithDeleteTag from './TagInputWithDeleteTag';
import CheckboxOrRadioGroup from './CheckboxOrRadioGroup';
import Select from './Select';
import SingleInput from './SingleInput';
import TextArea from './TextArea';

import { countryList, languageList, interviewStatusList, typeContractList, typeCurrencyList } from '../utils';

class InterviewForm extends Component {
    constructor(props) {
        super(props);

        const defaultState = {
            companyName: '',

            contactEmail: '',
            contactPhone: '',
            contactSkype: '',

            websiteCompany: '',
            websiteJob: '',

            jobDescription: '',
            jobPosition: '',
            jobSalary: '',
            jobSkills: [],

            selectedCurrency: typeCurrencyList[0],
            selectedContract: typeContractList[0],
            selectedCountry: '',
            selectedStatus: [],
            selectedLanguage: [],

            editMode: false
        };

        this.state = defaultState;
        this.subtitle = 'In this page you can add or edit a company.';

        this.handleDeleteTag = this.handleDeleteTag.bind(this);
        this.handleInsertTag = this.handleInsertTag.bind(this);

        this.handleLanguageSelection = this.handleLanguageSelection.bind(this);
        this.handleStatusSelection = this.handleStatusSelection.bind(this);
        this.handleCountrySelection = this.handleCountrySelection.bind(this);
        this.handleContractSelection = this.handleContractSelection.bind(this);
        this.handleCurrencySelection = this.handleCurrencySelection.bind(this);

        this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
        this.handleContactEmailChange = this.handleContactEmailChange.bind(this);
        this.handleContactPhoneChange = this.handleContactPhoneChange.bind(this);
        this.handleContactSkypeChange = this.handleContactSkypeChange.bind(this);
        this.handleWebsiteCompanyChange = this.handleWebsiteCompanyChange.bind(this);
        this.handleWebsiteJobChange = this.handleWebsiteJobChange.bind(this);
        this.handlejobDescriptionChange = this.handlejobDescriptionChange.bind(this);
        this.handleJobPositionChange = this.handleJobPositionChange.bind(this);
        this.handleJobSalaryChange = this.handleJobSalaryChange.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        const routerParams = this.props.match.params;
        if (Object.keys(routerParams).length > 0) {
            // We are in EDIT mode
            // We must retreave data from the Company from the localstorage
            let jobs = localStorage.getItem('jobs');
            if (jobs) {
                jobs = JSON.parse(jobs);
                const currentJob = jobs[routerParams.id];

                if(currentJob) {
                    this.setState({
                        companyName: currentJob.companyName,
                        
                        contactEmail: currentJob.contactEmail,
                        contactPhone: currentJob.contactPhone,
                        contactSkype: currentJob.contactSkype,
                        
                        websiteCompany: currentJob.websiteCompany,
                        websiteJob: currentJob.websiteJob,
                        
                        jobDescription: currentJob.jobDescription,
                        jobPosition: currentJob.jobPosition,
                        jobSalary: currentJob.jobSalary,
                        jobSkills: currentJob.jobSkills,
                        
                        selectedCurrency: currentJob.selectedCurrency,
                        selectedContract: currentJob.selectedContract,
                        selectedCountry: currentJob.selectedCountry,
                        selectedStatus: currentJob.selectedStatus,
                        selectedLanguage: currentJob.selectedLanguage,
                        
                        editMode: true,
                        companyId: routerParams.id
                    }, () => {
                        console.log('STATE_LOCAL: ', this.state);
                    });
                }
            }
        }
    }

    handleDeleteTag(skillName) {
        const jobSkills = this.state.jobSkills.filter((skill) => {
            return skill !== skillName;
        });
        this.setState({ jobSkills }, () => {
            // this._updateLocalStorage();
        });
    }

    handleInsertTag(newSkill) {
        this.setState((prevState, props) => {
            return { jobSkills: [...prevState.jobSkills, newSkill] }
        }, () => {
            // this._updateLocalStorage();
        });
    }

    handleLanguageSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;
        if (this.state.selectedLanguage.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.selectedLanguage.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.selectedLanguage, newSelection];
        }
        this.setState({ selectedLanguage: newSelectionArray }, () => console.log('languaage selection: ', this.state.selectedLanguage));
    }
    handleStatusSelection(e) {
        this.setState({ selectedStatus: [e.target.value] }, () => console.log('status: ', this.state.selectedStatus));
    }
    handleCountrySelection(e) {
        this.setState({ selectedCountry: e.target.value }, () => console.log('Country: ', this.state.selectedCountry));
    }
    handleContractSelection(e) {
        this.setState({ selectedContract: e.target.value }, () => console.log('Contract: ', this.state.selectedContract));
    }
    handleCurrencySelection(e) {
        this.setState({ selectedCurrency: e.target.value }, () => console.log('Currency: ', this.state.selectedCurrency));
    }
    handleCompanyNameChange(e) {
        this.setState({ companyName: e.target.value }, () => console.log('companyName: ', this.state.companyName))
    }
    handleContactEmailChange(e) {
        this.setState({ contactEmail: e.target.value }, () => console.log('contactEmail: ', this.state.contactEmail))
    }
    handleContactPhoneChange(e) {
        this.setState({ contactPhone: e.target.value }, () => console.log('contactPhone: ', this.state.contactPhone))
    }
    handleContactSkypeChange(e) {
        this.setState({ contactSkype: e.target.value }, () => console.log('contactSkype: ', this.state.contactSkype))
    }
    handleWebsiteCompanyChange(e) {
        this.setState({ websiteCompany: e.target.value }, () => console.log('websiteCompany: ', this.state.websiteCompany))
    }
    handleWebsiteJobChange(e) {
        this.setState({ websiteJob: e.target.value }, () => console.log('websiteJob: ', this.state.websiteJob))
    }
    handlejobDescriptionChange(e) {
        this.setState({ jobDescription: e.target.value }, () => console.log('jobDescription: ', this.state.jobDescription))
    }
    handleJobPositionChange(e) {
        this.setState({ jobPosition: e.target.value }, () => console.log('jobPosition: ', this.state.jobPosition))
    }
    handleJobSalaryChange(e) {
        this.setState({ jobSalary: e.target.value }, () => console.log('jobSalary: ', this.state.jobSalary))
    }

    onFormSubmit(e) {
        e.preventDefault();

        const payload = {
            companyName: this.state.companyName,
            contactEmail: this.state.contactEmail,
            contactPhone: this.state.contactPhone,
            contactSkype: this.state.contactSkype,
            websiteCompany: this.state.websiteCompany,
            websiteJob: this.state.websiteJob,
            jobDescription: this.state.jobDescription,
            jobPosition: this.state.jobPosition,
            jobSalary: this.state.jobSalary,
            jobSkills: this.state.jobSkills,
            selectedCurrency: this.state.selectedCurrency,
            selectedContract: this.state.selectedContract,
            selectedCountry: this.state.selectedCountry,
            selectedStatus: this.state.selectedStatus,
            selectedLanguage: this.state.selectedLanguage,
        };

        let jobs = localStorage.getItem('jobs');
        if (jobs) {
            jobs = JSON.parse(jobs);
            jobs[this.state.companyId] = payload;
        }
        else {
            jobs = {
                [new Date().getTime()]: payload
            }
        }
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }

    render() {
        const title = this.state.editMode ? `Edit ${this.state.companyName}` : 'Add new company';
        return (
            <div className="interview-form">
                <Hero title={title} subtitle={this.subtitle} />
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column"></div>
                            <div className="column is-10">
                                <div className="box">

                                    <form onSubmit={this.onFormSubmit}>

                                        <div className="columns">

                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">What's the company name?</label>
                                                    <p className="control">
                                                        <SingleInput
                                                            inputType={'text'}
                                                            title={''}
                                                            name={'companyName'}
                                                            controlFunc={this.handleCompanyNameChange}
                                                            content={this.state.companyName}
                                                            placeholder={'e.g. Google'} />
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">What's the country?</label>
                                                    <p className="control has-icons-left">
                                                        <Select
                                                            name={'country-select'}
                                                            options={countryList}
                                                            selectedOption={this.state.selectedCountry}
                                                            controlFunc={this.handleCountrySelection}
                                                            placeholder={'Country'}
                                                        />
                                                        <span className="icon is-small is-left">
                                                            <FontAwesomeIcon icon={faGlobe} />
                                                        </span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="columns">
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Contact email</label>
                                                    <p className="control has-icons-left">
                                                        <SingleInput
                                                            inputType={'text'}
                                                            title={''}
                                                            name={'contactEmail'}
                                                            controlFunc={this.handleContactEmailChange}
                                                            content={this.state.contactEmail}
                                                            placeholder={'e.g. company-name@gmail.com'} />
                                                        <span className="icon is-small is-left">
                                                            <FontAwesomeIcon icon={faAt} />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Website</label>
                                                    <p className="control has-icons-left">
                                                        <SingleInput
                                                            inputType={'text'}
                                                            title={''}
                                                            name={'websiteCompany'}
                                                            controlFunc={this.handleWebsiteCompanyChange}
                                                            content={this.state.websiteCompany}
                                                            placeholder={'e.g. http://company-website.com'} />
                                                        <span className="icon is-small is-left">
                                                            <FontAwesomeIcon icon={faLink} />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Job url</label>
                                                    <p className="control has-icons-left">
                                                        <SingleInput
                                                            inputType={'text'}
                                                            title={''}
                                                            name={'websiteJob'}
                                                            controlFunc={this.handleWebsiteJobChange}
                                                            content={this.state.websiteJob}
                                                            placeholder={'e.g. https://job-website.com'} />
                                                        <span className="icon is-small is-left">
                                                            <FontAwesomeIcon icon={faLink} />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="columns">
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Contact Phone</label>
                                                    <p className="control has-icons-left">
                                                        <SingleInput
                                                            inputType={'text'}
                                                            title={''}
                                                            name={'contactPhone'}
                                                            controlFunc={this.handleContactPhoneChange}
                                                            content={this.state.contactPhone}
                                                            placeholder={'e.g. +39 3456 789 012'} />
                                                        <span className="icon is-small is-left">
                                                            <FontAwesomeIcon icon={faPhone} />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Contact Skype</label>
                                                    <p className="control has-icons-left">
                                                        <SingleInput
                                                            inputType={'text'}
                                                            title={''}
                                                            name={'contactSkype'}
                                                            controlFunc={this.handleContactSkypeChange}
                                                            content={this.state.contactSkype}
                                                            placeholder={'e.g. Skype_id'} />
                                                        <span className="icon is-small is-left">
                                                            <FontAwesomeIcon icon={faSkype} />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="columns">
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Job position</label>
                                                    <p className="control">
                                                        <SingleInput
                                                            inputType={'text'}
                                                            title={''}
                                                            name={'jobPosition'}
                                                            controlFunc={this.handleJobPositionChange}
                                                            content={this.state.jobPosition}
                                                            placeholder={'e.g. Frontend developer'} />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="columns">
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Contract type</label>
                                                    <p className="control has-icons-left">
                                                        <Select
                                                            name={'contract-type'}
                                                            options={typeContractList}
                                                            selectedOption={this.state.selectedContract}
                                                            controlFunc={this.handleContractSelection}
                                                            placeholder={'Select contract type'}
                                                        />
                                                        <span className="icon is-small is-left">
                                                            <FontAwesomeIcon icon={faClock} />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="column">
                                                <label className="label">Expected anual salary</label>
                                                <div className="field has-addons">
                                                    <p className="control">
                                                        <Select
                                                            name={'currency-type'}
                                                            options={typeCurrencyList}
                                                            selectedOption={this.state.selectedCurrency}
                                                            controlFunc={this.handleCurrencySelection}
                                                            placeholder={'Curr.'}
                                                        />
                                                    </p>

                                                    <p className="control">
                                                        <SingleInput
                                                            inputType={'text'}
                                                            title={''}
                                                            name={'jobSalary'}
                                                            controlFunc={this.handleJobSalaryChange}
                                                            content={this.state.jobSalary}
                                                            placeholder={'e.g. 2500000'} />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <label className="label">Required Job Skills</label>
                                        <div className="columns">
                                            <div className="column">
                                                <div className="field is-grouped is-grouped-multiline">
                                                    <TagInputWithDeleteTag
                                                        skills={this.state.jobSkills}
                                                        handleInsertTag={this.handleInsertTag}
                                                        handleDeleteTag={this.handleDeleteTag}
                                                    />
                                                    <p>Colorare quelli che appartengono alle mie Skill</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="columns">
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Job description</label>
                                                    <p className="control">
                                                        <TextArea
                                                            title={''}
                                                            rows={5}
                                                            resize={false}
                                                            content={this.state.jobDescription}
                                                            name={'jobDescription'}
                                                            controlFunc={this.handlejobDescriptionChange}
                                                            placeholder={'e.g. Essential skills...'} />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="columns">
                                            <div className="column">
                                                <CheckboxOrRadioGroup
                                                    title={'Status Interview'}
                                                    name={'status-interview'}
                                                    type={'radio'}
                                                    controlFunc={this.handleStatusSelection}
                                                    options={interviewStatusList}
                                                    selectedOptions={this.state.selectedStatus}
                                                />
                                            </div>
                                        </div>

                                        <div className="columns">
                                            <div className="column">
                                                <CheckboxOrRadioGroup
                                                    title={'Required language'}
                                                    name={'language'}
                                                    type={'checkbox'}
                                                    controlFunc={this.handleLanguageSelection}
                                                    options={languageList}
                                                    selectedOptions={this.state.selectedLanguage}
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <p className="control">
                                                    <button type="submit"
                                                        className="button is-primary is-fullwidth is-large">
                                                        <strong>Add new</strong>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className="column"></div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default InterviewForm;