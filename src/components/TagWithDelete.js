import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from './Tag';

class TagWithDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleRemove = (name) => {
        this.props.handleDeleteTag(name);
    }

    render() {
        const tagDeleteClassName = classNames({
            'tag is-delete': true,
            'is-medium': this.props.size === 'is-medium'
        });

        return (
            <div className="tags has-addons is-medium">
                <Tag name={this.props.name} color="is-primary" size={this.props.size} />
                <span className={tagDeleteClassName} onClick={(e) => {this.handleRemove(this.props.name, e)}}></span>
            </div>
        );
    }
}

TagWithDelete.defaultProps = {
    size: ''
};

TagWithDelete.propTypes = {
    name: PropTypes.string.isRequired,
    handleDeleteTag: PropTypes.func.isRequired,
    size: PropTypes.string,
};

export default TagWithDelete;