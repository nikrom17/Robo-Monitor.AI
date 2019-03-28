import React from 'react';

import classes from './ErrorHistory.css';


    let errors = [
        { id: 'dfa ', description: 'Foreign Object (wooden beam) in cell', image: "/im_5.jpg", date: "05-16-2018 12:17 PM" },
        { id: 'asfa1', description: 'Foreign Object (shoe) in cell', image: "/im_3.jpg", date: "05-16-2018 12:17 PM"},
        { id: 'vasdf1', description: 'Robot Colision: Axis 6 external force exceeded', image: "/im_4.jpg", date: "05-16-2018 12:17 PM" },
        { id: 'fdasf ', description: 'Loss of pressure: Axis 3', image: "/im_6.jpg" , date: "05-16-2018 12:17 PM"},
        { id: 'asdrewaf11', description: 'Welding wire jam', image: "/im_4.jpg" , date: "05-16-2018 12:17 PM"},
        { id: 'apkglfgssdf11', description: 'Communication error: valve manifold', image: "/im_6.jpg" , date: "05-16-2018 12:17 PM"}
        ];

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
