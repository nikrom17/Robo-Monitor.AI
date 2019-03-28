import React from 'react';
import classes from './Error.css';

const Error = ( props ) => {
    return (
        <div className={classes.error}>
            <img src={props.image} alt={props.description}  />
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    )
};

export default Error;