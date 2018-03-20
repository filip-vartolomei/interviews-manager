import React from 'react';
import PropTypes from 'prop-types';

/* <label className="label">{props.title}</label> */

const TextArea = (props) => (
	<textarea
		className="textarea"
		style={props.resize ? null : { resize: 'none' }}
		name={props.name}
		rows={props.rows}
		value={props.content}
		onChange={props.controlFunc}
		placeholder={props.placeholder} />
);

TextArea.propTypes = {
	title: PropTypes.string.isRequired,
	rows: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	resize: PropTypes.bool,
	placeholder: PropTypes.string,
	controlFunc: PropTypes.func.isRequired
};

export default TextArea;