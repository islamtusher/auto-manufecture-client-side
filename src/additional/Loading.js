import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="w-16 h-16 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;