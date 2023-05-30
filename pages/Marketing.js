import React from 'react';
import marketing1 from "../public/buying.gif"
import marketing2 from "../public/giphy.gif"
import Image from 'next/image';
const Marketing = () => {
    return (
        <div className='container'>
           <Image className='img-fluid' src={marketing2}/>
        </div>
    );
};

export default Marketing;