import React, { Component } from 'react';

import Hero from './Hero';
import TagInputWithDeleteTag from './TagInputWithDeleteTag';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        };
    }

    componentDidMount() {
        let user = localStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            this.setState({
                skills: user.skills
            });
        }
    }

    handleDeleteTag = (skillName) => {
        const skills = this.state.skills.filter((skill) => {
            return skill !== skillName;
        });
        this.setState({skills}, () => {
            this._updateLocalStorage();
        });
    }

    handleInsertTag = (newSkill) => {
        this.setState((prevState, props) => {
            return { skills: [...prevState.skills, newSkill]}
        }, () => {
            this._updateLocalStorage();
        });
    }

    _updateLocalStorage = () => {
        localStorage.setItem('user', JSON.stringify({
            skills: this.state.skills
        }));
    }

    render() {
        return (
            <div className="profile">
                <Hero title="Profile" subtitle="This is your most intimate page! Customize your skills and your Bio." />

                <section className="section">
                    <div className="container">
                        <ol className="content">
                            <li>my Skills</li>
                            <li>my presentation letter</li>
                            <li>my CV</li>
                        </ol>
                        <div className="columns">
                            <div className="column"></div>
                            <div className="column is-10">
                                <div className="box">
                                    <form>
                                        <div className="columns">
                                            <div className="column">
                                                <label className="label">What's your skills?</label>
                                                <div className="field is-grouped is-grouped-multiline">
                                                    <TagInputWithDeleteTag
                                                        skills={this.state.skills}
                                                        handleInsertTag={this.handleInsertTag}
                                                        handleDeleteTag={this.handleDeleteTag}
                                                        size="is-medium"
                                                    />
                                                </div>
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

export default Profile;