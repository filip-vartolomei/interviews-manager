import React from 'react';

const NumberCube = (props) => {
    return (
        <div className="rounded_number">
            <h1 className="title">{props.text}</h1>
        </div>
    );
}

export default NumberCube;