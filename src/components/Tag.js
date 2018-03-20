import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tag = (props) => {
    const tagClassNames = classNames({
        'tag': true,
        'has-shadow': props.hasShadow,
        'is-medium': props.size === 'is-medium',
        [props.color]: props.color ? true : false
    });
    return <span className={tagClassNames}>{props.name}</span>;
};

Tag.defaultProps = {
    hasShadow: false,
    size: '',
    color: ''
};
Tag.propTypes = {
    name: PropTypes.string.isRequired,
    hasShadow: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string
};

export default Tag;