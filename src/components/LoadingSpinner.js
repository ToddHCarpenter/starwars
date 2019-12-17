import React from 'react';
import Spinner from 'react-bootstrap/Spinner'



const LoadingSpinner = () => (


    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }}>

        <Spinner animation="grow" />
    </div>
);

export default LoadingSpinner;