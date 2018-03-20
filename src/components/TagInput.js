import React, { Component } from 'react';
import classNames from 'classnames';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/fontawesome-free-solid';

class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleInput = (e) => {
        e.preventDefault();
        const inputValue = this.textInput.value;
        if (inputValue !== '') {   
            this.props.handleInsertTag(inputValue);
            this.textInput.value = '';
        }
    }

    render() {
        const inputClass = classNames({
            'input': true,
            'is-small': this.props.size !== 'is-medium'
        });
        const buttonClass = classNames({
            'button is-info': true,
            'is-small': this.props.size !== 'is-medium'
        });
        return (
            <div className="field has-addons has-addons-right">
                <div className="control has-icons-left">
                    <input type="text"
                            ref={(input) => { this.textInput = input; }}
                            placeholder="e.g. Angular.js"
                            className={inputClass}
                    />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faCode} />
                    </span>
                </div>
                <div className="control">
                    <button className={buttonClass} onClick={(e) => {this.handleInput(e)}}>
                        ADD SKILL
                    </button>
                </div>
            </div>
        );
    }
}

export default TagInput;