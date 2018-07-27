import React from 'react';

import classes from './ErrorHistory.css';

const errorHistory = ( props ) => {
    return (
        <div className={classes.ErrorHistory}>
            <img src={props.image} alt={props.description}  />
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    )
};

export default errorHistory;
