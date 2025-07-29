// @flow strict

import * as React from 'react';


function Error() {
    return (
        <div className='bg-gradient-to-b from-emerald-900 to-emerald-300 flex flex-col pl-[400px] min-h-screen pt-10'>
            <h1 className='font-extrabold text-[200px] text-red-700 pl-[100px] '>404</h1>
            <h2 className='font-medium text-[100px] text-red-600 secondary-font'>Page not Found</h2>
        </div>
    );
}; 

export default Error;