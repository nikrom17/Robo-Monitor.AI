import React from 'react';
import Error from './Error/Error';

import image from '../../assets/img/im_6.jpg'

import classes from './ErrorHistory.css';


    let errors = [
        { id: '1', description: 'Foreign Object (wooden beam) in cell', image: "im_5.jpg", date: "05-16-2018 12:17 PM" },
        { id: '2', description: 'Foreign Object (shoe) in cell', image: "im_3.jpg", date: "05-16-2018 12:17 PM"},
        { id: '3', description: 'Robot Colision: Axis 6 external force exceeded', image: "im_4.jpg", date: "05-16-2018 12:17 PM" },
        { id: '4', description: 'Loss of pressure: Axis 3', image: "im_6.jpg" , date: "05-16-2018 12:17 PM"},
        { id: '5', description: 'Welding wire jam', image: "im_4.jpg" , date: "05-16-2018 12:17 PM"},
        { id: '6', description: 'Communication error: valve manifold', image: "im_6.jpg" , date: "05-16-2018 12:17 PM"}
    ];

    const ErrorHistory = () => {
        console.log(errors);
        return (
            <div className={classes.errorHistory}>
                {errors.map( ( error ) => {
                    return <Error
                        description={error.description}
                        image={error.image}
                        date={error.date}
                        key={error.id} />
                    }
                )}
            </div>
        );
    }

export default ErrorHistory;
