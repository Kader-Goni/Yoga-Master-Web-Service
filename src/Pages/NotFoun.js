import React from 'react';
import NotFound from '../Images/NotFound.jpg'
import '../Style/Home.css'

const Notfound = () => {
    return (
        <div className='text-danger mt-5'>
            <div className="w-50 mx-auto bg-danger bg-opacity-25 rounded-3 p-3">
                <h2>Opps... Page NOT FOUND...</h2>
                <h2>404 errors...</h2>
            </div>
            <div className="p-5 margin-top">
                <img src={NotFound} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default Notfound;