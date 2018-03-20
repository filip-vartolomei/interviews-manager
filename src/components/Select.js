import React from 'react';
import PropTypes from 'prop-types';

/* <label className="label">{props.title}</label> */

const CheckboxOrRadioGroup = (props) => (
    <span className="select is-fullwidth">
        <select
            name={props.name}
            value={props.selectedOption}
            onChange={props.controlFunc}>
            <option value="" disabled hidden>{props.placeholder}</option>
            {props.options.map(opt => {
                return (
                    <option
                        key={opt}
                        value={opt}>{opt}</option>
                );
            })}
        </select>
    </span>
);

CheckboxOrRadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.string,
	controlFunc: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default CheckboxOrRadioGroup;