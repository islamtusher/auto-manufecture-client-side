import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div>
            <h1 className='text-[36px] text-red-500 text-center font-bold'>Page not Found</h1>
            <img className='lg:w-[500px]' src="./images/404.png" alt="" />
            </div>
        </div>
    );
};

export default NotFound;