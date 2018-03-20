import React from 'react';
import PropTypes from 'prop-types';

const CheckboxOrRadioGroup = (props) => (
    <div>
        <label className="label">{props.title}</label>
        {props.options.map(option => {
				return (
                    <div className="field" key={option}>
                        <input className="is-checkradio"
                            id={option}
							name={props.name}
                            type={props.type}
                            value={option}
                            checked={props.selectedOptions.indexOf(option) > -1}
                            onChange={props.controlFunc}
						/>
                        <label htmlFor={option}>{option}</label>
                    </div>
                );
        })}
    </div>
);

CheckboxOrRadioGroup.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedOptions: PropTypes.array,
	controlFunc: PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;