import React from 'react';

const Alert = (props) => {
    const {
        title,
        message
    }  = props

    return (
        <div>
        <h3>{title}</h3>
            <span>{message}</span>
        </div>
    );
};

export default Alert;