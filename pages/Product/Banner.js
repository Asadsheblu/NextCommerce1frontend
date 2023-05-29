import React from 'react';
import banner from "../../public/5594188.jpg"
import Image from 'next/image'
const Banner = () => {
    return (
        <div className='shadow'>
           <Image className='w-100 h-50' src={banner}/> 
        </div>
    );
};

export default Banner;