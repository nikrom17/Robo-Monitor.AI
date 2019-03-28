import React from 'react';
import classes from './SystemStats.css';

const systemStats = ( props ) => {
    return (
        <div>
        <p className={classes.Stats}>System Runtime: 1 hour 5 mins 45 sec</p>
        <p className={classes.Stats}>System Downtime: 15 mins 3 sec</p>
        <p className={classes.Stats}>Pallets built: 11</p>
        <p className={classes.Stats}>System Error Total: 4</p>
        <p className={classes.Stats}>Pallet sheet level: Good</p>
        <p className={classes.Stats}>Tier sheet level: Good</p>
        </div>
    )
};

export default systemStats;