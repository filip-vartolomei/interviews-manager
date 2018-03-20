import React, { Component } from 'react';

import TagInput from './TagInput';
import TagWithDelete from './TagWithDelete';

class TagInputWithDeleteTag extends Component {
    renderSkill = (skillName, index) => {
        return (
            <div className="control" key={index}>
                <TagWithDelete name={skillName}
                    handleDeleteTag={this.props.handleDeleteTag}
                    size={this.props.size}
                />
            </div>
        );
    }

    handleDeleteSkill = (skillName) => {
        const skills = this.state.skills.filter((skill) => {
            return skill !== skillName;
        });
        this.setState({skills}, () => {
            this._updateLocalStorage();
        });
    }

    render() {       
        return (
            <div className="field is-grouped is-grouped-multiline">
                {this.props.skills.map((skill, index) => {
                    return this.renderSkill(skill, index);
                })}
                <TagInput handleInsertTag={this.props.handleInsertTag} size={this.props.size} />
            </div>
        );
    }
}

export default TagInputWithDeleteTag;