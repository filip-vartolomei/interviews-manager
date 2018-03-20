import React from 'react';

const InfoLabelJob = (props) => {
    return (
        <div>
            <p className="heading">{props.title}</p>
            <p className="title is-6">{props.text}</p>
        </div>
    );
}

export default InfoLabelJob;