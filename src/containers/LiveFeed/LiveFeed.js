import React from 'react';
import classes from './LiveFeed.css';

import robotVid from './robot.mov'

const liveFeed = ( props ) => {
    return (
        <div className={classes.LiveFeed}>
        	<video src={robotVid} type= "video/mp4" width="320" height="475"  autoPlay loop/>
        </div>
    )
};

export default liveFeed;
