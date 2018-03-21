import React from 'react';

const NumberCube = (props) => {
    // const number = props.text;
    return (
        <div className="rounded_number">
            <h1 className="title">{props.text}</h1>
        </div>
    );
}

export default NumberCube;